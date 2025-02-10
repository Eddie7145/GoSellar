import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { Box, Chip, Container, Grid, IconButton, Rating } from "@mui/material";
import ImageZoom from "react-image-zooom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Favorite, Share, Visibility } from "@mui/icons-material";
import { useCart } from "@/contexts/CartContext";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [image, setImage] = useState("/images 5.png");
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { slug } = router.query;
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) return;

      try {
        const response = await fetch(`http://localhost:9000/api/product/${slug}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data.data); // Ensure `data.data` matches your backend response structure
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <Layout>
      <Box className="my-5">
        <Container maxWidth={"xl"}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box className="bg-white p-4 w-full">
                <Grid container spacing={3}>
                  <Grid item xs={5}>
                    <Box className="bg-[#cdcdcd] relative w-auto h-auto flex justify-center items-center">
                      <Box className="absolute flex flex-col gap-1 top-2 right-2 z-20 space-y-2">
                        <IconButton className="bg-white p-2 rounded-full shadow">
                          <Favorite className="text-[#00670c]" />
                        </IconButton>
                        <IconButton className="bg-white p-2 rounded-full shadow">
                          <Visibility className="text-[#00670c]" />
                        </IconButton>
                        <IconButton className="bg-white p-2 rounded-full shadow">
                          <Share className="text-[#00670c]" />
                        </IconButton>
                      </Box>
                      <ImageZoom
                        src={product.image || image}
                        alt={product.name}
                        zoom="374"
                        style={{ width: "370px", height: "370px" }}
                        width={374}
                        height={374}
                      />
                    </Box>
                    <Carousel responsive={responsive} className="items-center">
                      {product?.image?.map((img, index) => (
                        <div key={index} className="w-[80px] h-[80px] my-3">
                          <img
                            className="aspect-[4/4]"
                            onClick={() => setImage(img)}
                            src={img}
                            alt={`Product Image ${index}`}
                          />
                        </div>
                      ))}
                    </Carousel>
                  </Grid>
                  <Grid item xs={5}>
                    <Box>
                      <h2 className="text-3xl font-bold">{product.name}</h2>
                      <Chip
                        label="Save 5%"
                        className="mt-3 bg-[#00670c] uppercase font-semibold text-white"
                      />
                      <div className="flex items-center gap-3 mt-3">
                        <Rating readOnly value={product.rating || 4} className="flex" />
                        ({product.reviewsCount || 5})
                      </div>
                      <p className="text-[#cdcdcd] mt-3">{product.stock} In Stock</p>
                      <div className="flex items-center gap-3 mt-3">
                        <h5 className="text-[24px] font-medium text-[#00670c]">
                          NGN {product.price}
                        </h5>
                        {product.discountPrice && (
                          <h5 className="text-[22px] line-through">
                            NGN {product.discountPrice}
                          </h5>
                        )}
                      </div>
                      <div className="mt-3 flex items-center">
                        <p>Quantity</p>
                        <div className="flex items-center justify-between ms-5 gap-3 border rounded-md">
                          <button
                            className="bg-[#66666630] p-2 py-0 text-[20px] rounded-s-md"
                            onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={quantity}
                            className="border border-1 border-[#00670c] w-[45px] px-3 text-center"
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                          />
                          <button
                            className="bg-[#66666630] p-2 py-0 text-[20px] rounded-e-md"
                            onClick={() => setQuantity((prev) => prev + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <Box className="bg-[#66666630] p-5 pe-32 mt-4 rounded-md w-max">
                        <h5 className="font-bold">Total NGN {product.price * quantity}</h5>
                        <h5 className="font-bold">Tax NGN {(product.price * quantity * 0.1).toFixed(2)}</h5>
                      </Box>
                      <Box className="flex gap-4 items-center mt-4">
                        <button className="bg-orange-400 text-white px-4 py-2 rounded-md">
                          Buy Now
                        </button>
                        <button
                          className="bg-[#00670c] text-white px-4 py-2 rounded-md ml-4"
                          onClick={() => addToCart({ ...product, quantity })}
                        >
                          Add To Cart
                        </button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default ProductDetail;
