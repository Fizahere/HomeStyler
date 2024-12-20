import React, { useState, useEffect } from "react";
import {
  Image,
  Heading,
  Text,
  Box,
  SimpleGrid,
  Flex,
  Skeleton,
  Avatar,
  Icon,
  Button,
} from "@chakra-ui/react";
import { Colors } from "../constants/colors";
import { useNavigate, useParams } from "react-router-dom";
import ProductsData from "../data/product-new-data.json";
import CustomButton from "../components/Mist/Button";
import { productsImagesMap } from "../constants/images";
import APP_ICONS from "../constants/icons";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";
import CustomBreadcrumb from "../components/Mist/CustomBreadCrumb";
import { useToast } from "@chakra-ui/react";

function ProductDetail() {
  const { product: productID } = useParams();
  const id = Number(productID);
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [foundProduct, setFoundProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const toast = useToast();
const navigate=useNavigate()
  useEffect(() => {
    const fetchData = () => {
      // const AllCategories = ProductsData.browsingProducts.categories.map((singleCategory)=>{
      //   const findCategory = singleCategory?.subcategories?.find((prod)=>{
      //     console.log(prod,'prod')
      //     prod?.name.toLowerCase() ===
      //   })
      //   console.log(singleCategory,'singleCategory')
      // })
      // console.log(AllCategories,'fetch')

      const product = ProductsData.browsingProducts.categories
        .flatMap((category) =>
          category.subcategories.flatMap((subcategory) => subcategory.products)
        )
        .find((product) => product.id === id);

      if (product) {
        const imageKey = product.image?.toUpperCase();
        const productImageSrc = productsImagesMap[imageKey];
        setImageUrl(productImageSrc || "fallback-image-url");
        setFoundProduct(product);
        setTotalPrice(product.price);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  const handleQuantityChange = (increment) => {
    const newQuantity = increment ? quantity + 1 : Math.max(1, quantity - 1);
    setQuantity(newQuantity);
    setTotalPrice(foundProduct.price * newQuantity);
  };

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = existingCart.findIndex((item) => item.id === id);

    if (itemIndex > -1) {
      toast({
        title: `${foundProduct.name} is already in your cart!`,
        status: "warning",
        duration: 1000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      existingCart.push({
        id,
        name: foundProduct.name,
        price: foundProduct.price,
        quantity,
        totalPrice,
        image: imageUrl,
        description: foundProduct.description,
        reviews: foundProduct.reviews,
      });
      localStorage.setItem("cart", JSON.stringify(existingCart));
      setTimeout(() => {
        location.assign(UnAuthenticatedRoutesNames.HOME);
      }, 500);
      toast({
        title: `${foundProduct?.name} added to your cart.`,
        description: `Quantity: ${quantity}`,
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top-right",
      });

     
    }
  };

  if (isLoading) {
    return (
      <Box display={"flex"} justifyContent={"space-between"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} p={0}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            ml={{ base: 0, md: 5 }}
          >
            <Box maxW={"600px"}>
              <Skeleton height="400px" width="800px" borderRadius="md" />
            </Box>
          </Box>
          <Box
            ml={{ base: 0, md: "80px" }}
            borderLeft={{ base: "none", md: "1px solid gray" }}
            p={{ base: 0, md: 3 }}
          >
            <Box mb={4} ml={5}>
              <Skeleton height="40px" width="300px" />
              <Skeleton height="20px" width="200px" mt={4} />
              <Skeleton height="20px" width="100%" mt={10} />
              <Skeleton height="20px" width="100%" mt={4} />
              <Flex mt={10} justifyContent={"space-between"}>
                <Skeleton height="20px" width="100px" />
              </Flex>
              <Skeleton height="50px" width="100%" mt={8} />
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    );
  }

  if (!foundProduct) {
    return <Text>Product not found</Text>;
  }

  const { name, description, price, reviews } = foundProduct;
  const breadcrumbItems = [
    {
      label: "Home".toLocaleUpperCase(),
      onClick: () => {
        navigate(UnAuthenticatedRoutesNames.HOME);
      },
    },
    // { label: "SHOP",},
    { label: name?.toLocaleUpperCase() || "Product", isCurrent: true },
  ];
  const reviewsArr = reviews?.length || 0;

  return (
    <>
      <CustomBreadcrumb items={breadcrumbItems} />
      <Box display={"flex"} justifyContent={"space-between"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} p={0}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            ml={{ base: 0, md: 5 }}
          >
            <Box maxW={"600px"}>
              <Image
                src={imageUrl}
                alt={name}
                borderRadius="md"
                width={{ base: "100%", md: "800px" }}
                height={{ md: "550px", base: "300px" }}
                mt={"14px"}
              />
            </Box>
          </Box>
          <Box
            ml={{ base: 0, md: "80px" }}
            borderLeft={{ base: "none", md: "1px solid gray" }}
            p={{ base: 0, md: 3 }}
          >
            <Box mb={4} ml={5}>
              <Heading size="xl">{name}</Heading>
              <Text fontSize={"15px"} fontWeight={"bold"} mt={10}>
                Description:
              </Text>
              <Text color={Colors.GREY} fontSize={14}>
                {description}
              </Text>
              <Flex mt={10} justifyContent={"space-between"}>
                <Flex>
                  <Text fontSize={"15px"} fontWeight={"bold"} m={2}>
                    Quantity:
                  </Text>
                  <Button onClick={() => handleQuantityChange(true)}>+</Button>
                  <Text mx={4} my={2}>
                    {quantity}
                  </Text>
                  <Button onClick={() => handleQuantityChange(false)}>-</Button>
                </Flex>
                <Text color="green">PKR {totalPrice.toFixed(2)}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text
                  mt={6}
                  fontSize={"15px"}
                  color={"green"}
                  fontWeight={"400"}
                >
                  Price: PKR {price}
                </Text>
                <Box>
                  {[...Array(5)].map((_, index) => (
                    <Icon
                      key={index}
                      as={APP_ICONS.FIILEDSTAR}
                      color={"#ffd11a"}
                    />
                  ))}
                </Box>
              </Flex>
              <Box mt={8}>
                <CustomButton
                  title={"Add to Cart"}
                  onClick={addToCart}
                  width={"100%"}
                />
              </Box>
              <Box mt={10} mb={5}>
                <Text fontSize={"25px"} fontWeight={"bold"}>
                  Review ({reviewsArr})
                </Text>
                {reviews?.map((singlereview, index) => (
                  <Flex
                    key={index}
                    p={1}
                    mt={6}
                    borderBottom={"1px solid grey"}
                  >
                    <Avatar name={singlereview.user || "User"} />
                    <Box ml={2}>
                      <Text ml={"2"} fontWeight={"bold"}>
                        {singlereview.user}
                      </Text>
                      <Text>{singlereview.comment}</Text>
                    </Box>
                  </Flex>
                ))}
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default ProductDetail;
