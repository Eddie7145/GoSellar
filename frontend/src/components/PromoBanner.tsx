import { Close } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";

export default function PromoBanner(){
    return <Box className="bg-[#00670c50]">
        <Container maxWidth={"xl"}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Box component={"div"} className="flex justify-between items-center py-2 text-[#00670c]">
                        <IconButton>
                            <Close className="text-[#00670c] text-lg md:text-"/>
                        </IconButton>
                        <Typography className="text-sm md:text-base lg:text-lg text-start md:text-center w-full" variant="body2">
                            Get 50% discount on all product from June 2024 to December 2024
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
}