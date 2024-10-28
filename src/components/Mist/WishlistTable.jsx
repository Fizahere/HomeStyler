import {
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Text,
    Image,
    Icon,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { productsImagesMap } from "../../constants/images";
  import APP_ICONS from "../../constants/icons";
  import { Colors } from "../../constants/colors";
  
  function WishlistTable({ searchQuery, sortOption }) {
    const [wishlistItems, setWishlistItems] = useState([]);
  
    useEffect(() => {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlistItems(storedWishlist);
    }, []);
  
    const removeFromWishlist = (id) => {
      const updatedWishlist = wishlistItems.filter((item) => item.id !== id);
      setWishlistItems(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };
  
    const filteredItems = wishlistItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const sortedItems = [...filteredItems].sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "price") {
        return a.price - b.price;
      }
      return 0;
    });
  
    return (
      <TableContainer>
        <Table variant="striped" colorScheme="blue">
          <TableCaption>
            <Text>Your Wishlist</Text>
            <Icon fontSize={20} mt={2} as={APP_ICONS.WISHLISTFILLED} />
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Product Name</Th>
              <Th isNumeric>Price</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedItems.length > 0 ? (
              sortedItems.map((item) => {
                const imageUrl =
                  productsImagesMap[item.image?.toUpperCase()] ||
                  "fallback-image-url";
                return (
                  <Tr key={item.id}>
                    <Td>
                      <Image
                        src={imageUrl}
                        alt={item.name}
                        boxSize="50px"
                        objectFit="cover"
                      />
                    </Td>
                    <Td>{item.name}</Td>
                    <Td isNumeric>PKR {item.price}</Td>
                    <Td>
                      <Icon
                        as={APP_ICONS.CLOSE}
                        onClick={() => removeFromWishlist(item.id)}
                        fontSize={23}
                        color={Colors.RED}
                        cursor={"pointer"}
                      />
                    </Td>
                  </Tr>
                );
              })
            ) : (
              <Tr>
                <Td colSpan={4} textAlign="center">
                  No items in the wishlist
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }
  
  export default WishlistTable;
  