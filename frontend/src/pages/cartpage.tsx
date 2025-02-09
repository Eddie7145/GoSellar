import Layout from "@/components/Layout";
import { Delete } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1); // Default to 1
  return (
    <Layout>
      <Box>
        <Container maxWidth={"xl"}>
          <Grid
            container
            spacing={2}
            className="mt-10 mb-10 bg-white"
          >
            <Grid item xs={6} className="border-r-1 border-green-600 p-5">
              <Box>
                <h1 className="font-bold text-3xl mb-5">Cart</h1>
                <div className="flex flex-col gap-3">
                  <Box className="flex items-center justify-between">
                    <div className="flex gap-5 items-center">
                      <img
                        src="images 2.png"
                        alt="Product Image"
                        className="w-[100px] h-[90px] rounded-md"
                      />
                      <div className="flex flex-col gap-2">
                        <Typography
                          className="font-bold text-[20px]"
                          variant="h5"
                        >
                          Basket of pepper
                        </Typography>
                        <Typography
                          className="font-medium text-[17px]"
                          variant="h5"
                        >
                          NGN 150.00
                        </Typography>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center">
                      <div className="flex items-center justify-between ms-5 gap-3 bg-slate-200 rounded-md">
                        <button
                          className="p-2 py-0 text-[20px] rounded-s-md"
                          onClick={() =>
                            setQuantity((prev) => Math.max(prev - 1, 1))
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={quantity}
                          className="bg-transparent w-[45px] px-3 text-center"
                          onChange={(e) =>
                            setQuantity(
                              Math.max(1, parseInt(e.target.value, 10) || 1)
                            )
                          }
                        />
                        <button
                          className="p-2 py-0 text-[20px] rounded-e-md"
                          onClick={() => setQuantity((prev) => prev + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <Button className="bg-red-600 text-white">
                      <Delete />
                    </Button>
                  </Box>
                  <Box className="flex items-center justify-between">
                    <div className="flex gap-5 items-center">
                      <img
                        src="images 2.png"
                        alt="Product Image"
                        className="w-[100px] h-[90px] rounded-md"
                      />
                      <div className="flex flex-col gap-2">
                        <Typography
                          className="font-bold text-[20px]"
                          variant="h5"
                        >
                          Basket of pepper
                        </Typography>
                        <Typography
                          className="font-medium text-[17px]"
                          variant="h5"
                        >
                          NGN 150.00
                        </Typography>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center">
                      <div className="flex items-center justify-between ms-5 gap-3 bg-slate-200 rounded-md">
                        <button
                          className="p-2 py-0 text-[20px] rounded-s-md"
                          onClick={() =>
                            setQuantity((prev) => Math.max(prev - 1, 1))
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={quantity}
                          className="bg-transparent w-[45px] px-3 text-center"
                          onChange={(e) =>
                            setQuantity(
                              Math.max(1, parseInt(e.target.value, 10) || 1)
                            )
                          }
                        />
                        <button
                          className="p-2 py-0 text-[20px] rounded-e-md"
                          onClick={() => setQuantity((prev) => prev + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <Button className="bg-red-600 text-white">
                      <Delete />
                    </Button>
                  </Box>
                  <Box className="flex items-center justify-between">
                    <div className="flex gap-5 items-center">
                      <img
                        src="images 2.png"
                        alt="Product Image"
                        className="w-[100px] h-[90px] rounded-md"
                      />
                      <div className="flex flex-col gap-2">
                        <Typography
                          className="font-bold text-[20px]"
                          variant="h5"
                        >
                          Basket of pepper
                        </Typography>
                        <Typography
                          className="font-medium text-[17px]"
                          variant="h5"
                        >
                          NGN 150.00
                        </Typography>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center">
                      <div className="flex items-center justify-between ms-5 gap-3 bg-slate-200 rounded-md">
                        <button
                          className="p-2 py-0 text-[20px] rounded-s-md"
                          onClick={() =>
                            setQuantity((prev) => Math.max(prev - 1, 1))
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={quantity}
                          className="bg-transparent w-[45px] px-3 text-center"
                          onChange={(e) =>
                            setQuantity(
                              Math.max(1, parseInt(e.target.value, 10) || 1)
                            )
                          }
                        />
                        <button
                          className="p-2 py-0 text-[20px] rounded-e-md"
                          onClick={() => setQuantity((prev) => prev + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <Button className="bg-red-600 text-white">
                      <Delete />
                    </Button>
                  </Box>
                  <Box className="flex items-center justify-between">
                    <div className="flex gap-5 items-center">
                      <img
                        src="images 2.png"
                        alt="Product Image"
                        className="w-[100px] h-[90px] rounded-md"
                      />
                      <div className="flex flex-col gap-2">
                        <Typography
                          className="font-bold text-[20px]"
                          variant="h5"
                        >
                          Basket of pepper
                        </Typography>
                        <Typography
                          className="font-medium text-[17px]"
                          variant="h5"
                        >
                          NGN 150.00
                        </Typography>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center">
                      <div className="flex items-center justify-between ms-5 gap-3 bg-slate-200 rounded-md">
                        <button
                          className="p-2 py-0 text-[20px] rounded-s-md"
                          onClick={() =>
                            setQuantity((prev) => Math.max(prev - 1, 1))
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={quantity}
                          className="bg-transparent w-[45px] px-3 text-center"
                          onChange={(e) =>
                            setQuantity(
                              Math.max(1, parseInt(e.target.value, 10) || 1)
                            )
                          }
                        />
                        <button
                          className="p-2 py-0 text-[20px] rounded-e-md"
                          onClick={() => setQuantity((prev) => prev + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <Button className="bg-red-600 text-white">
                      <Delete />
                    </Button>
                  </Box>
                  <Box className="flex items-center justify-between">
                    <div className="flex gap-5 items-center">
                      <img
                        src="images 2.png"
                        alt="Product Image"
                        className="w-[100px] h-[90px] rounded-md"
                      />
                      <div className="flex flex-col gap-2">
                        <Typography
                          className="font-bold text-[20px]"
                          variant="h5"
                        >
                          Basket of pepper
                        </Typography>
                        <Typography
                          className="font-medium text-[17px]"
                          variant="h5"
                        >
                          NGN 150.00
                        </Typography>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center">
                      <div className="flex items-center justify-between ms-5 gap-3 bg-slate-200 rounded-md">
                        <button
                          className="p-2 py-0 text-[20px] rounded-s-md"
                          onClick={() =>
                            setQuantity((prev) => Math.max(prev - 1, 1))
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={quantity}
                          className="bg-transparent w-[45px] px-3 text-center"
                          onChange={(e) =>
                            setQuantity(
                              Math.max(1, parseInt(e.target.value, 10) || 1)
                            )
                          }
                        />
                        <button
                          className="p-2 py-0 text-[20px] rounded-e-md"
                          onClick={() => setQuantity((prev) => prev + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <Button className="bg-red-600 text-white">
                      <Delete />
                    </Button>
                  </Box>
                </div>
              </Box>
            </Grid>
            <Grid item xs={6} className="border-l-2 border-[#e7e7e7] p-5">
            <Box>
                <h1 className="font-bold text-2xl mb-5">Summary</h1>
                <Box className="w-full flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <h5 className="font-semibold text-[20px] border-0 border-b pb-2 border-[#cccc]">Total</h5>
                        <p className="font-medium p-2 text-[17px]">NGN 5,000.00</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h5 className="font-semibold text-[20px] border-0 border-b pb-2 border-[#cccc]">Subtotal</h5>
                        <p className="font-medium p-2 text-[17px]">NGN 4,600.00</p>
                    </div>
                </Box>
                <Button className="mt-10 w-full bg-[#00670c] py-5 text-white font-semibold">Proceed to Checkout</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default CartPage;
