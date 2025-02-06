// uploadController.js
import https from "https";
import fs from "fs";
import expressAsyncHandler from "express-async-handler";

const BASE_HOSTNAME = "uk.storage.bunnycdn.com"
const HOSTNAME =BASE_HOSTNAME;
const ACCESS_KEY = "9b6a3fab-f021-4f50-a73e4314fe5b-93ba-494c";
const STORAGE_ZONE_NAME = "mve-gosellar";

export const uploadFile = expressAsyncHandler(async (req, res) => {
  console.log("Incoming file:", req.file);

  if (!req.file) {
    return res.status(400).json({ status: false, msg: "No file attached." });
  }

  const file = req.file;
  const filePath = file.path;
  const fileName = encodeURIComponent(file.originalname);

  try {
    const readStream = fs.createReadStream(filePath);

    const options = {
      method: "PUT",
      hostname: HOSTNAME,
      path: `/${STORAGE_ZONE_NAME}/${fileName}`,
      headers: {
        AccessKey: ACCESS_KEY,
        "Content-Type": "application/octet-stream",
      },
    };

    const reqBunny = https.request(options, (response) => {
      let responseBody = "";

      response.on("data", (chunk) => {
        responseBody += chunk;
      });

      response.on("end", () => {
        if (response.statusCode === 201 || response.statusCode === 200) {
          fs.unlink(filePath, (err) => {
            if (err) console.error("Error removing file:", err);
            else console.log("Temporary file removed successfully.");
          });

          res.status(201).json({
            status: true,
            msg: "File Uploaded Successfully",
            path: `/${STORAGE_ZONE_NAME}/${fileName}`,
          });
        } else {
          res.status(response.statusCode).json({
            status: false,
            msg: "File Upload Failed",
            response: responseBody,
          });
        }
      });
    });

    reqBunny.on("error", (error) => {
      console.error("Error in BunnyCDN request:", error);
      res.status(500).json({
        status: false,
        msg: "File Upload Failed",
        error: error.message,
      });
    });

    readStream.pipe(reqBunny);
  } catch (error) {
    console.error("Error during upload:", error);
    res.status(500).json({ status: false, msg: "Internal Server Error" });
  }
});

export const deleteFile = expressAsyncHandler(async(req, res) => {
    const url = `https://${HOSTNAME}/${STORAGE_ZONE_NAME}/${req.params.fileName}`;
    const options = {
        method: "DELETE",
        headers: { AccessKey: ACCESS_KEY },
    };
    try{
        const response = await fetch(url, options);
        if(response.ok){
            res.status(200).json({status: true, msg: "File Deleted Successfully"});
        } else{
            const errorText = await response.text();
            res.status(response.status).json({status: false, msg: `Error in deleting file: ${errorText}`});
        }
    }catch(error){
        res.status(500).json({status: false, msg: "Error in deleting file"});
    }
})
