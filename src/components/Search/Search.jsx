import { useState } from "react";
import { Box, IconButton, Input, Flex } from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useParams } from "react-router-dom";

const CustomSearch = (
  // {searchToggle,setSearchToggle}
) => {
  // console.log(searchToggle,'searchToggle');
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // const handleCloseClick = () => {
  //   setIsSearchOpen(false);
  //   setSearchToggle(!searchToggle)
  //   setSearchQuery("");
  // };

  return (
    <Box position="relative">
      {/* {!isSearchOpen ? (
        <IconButton
          icon={<AiOutlineSearch />}
          onClick={handleSearchIconClick}
          aria-label="Open Search"
          variant="ghost"
        />
      ) : ( */}
        <Box
          // position="absolute"
          top="0"
          right="0"
          p={2}
          borderRadius="md"
          boxShadow="lg"
          bg="white"
          // w="100vh"
          // maxW="300px"
          zIndex="popover"
        >
          {/* <Flex alignItems="center"> */}
            <Input
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {/* <IconButton
              icon={<AiOutlineClose />}
              onClick={handleCloseClick}
              aria-label="Close Search"
              ml={2}
              variant="ghost"
            /> */}
          {/* </Flex> */}
        </Box>
      {/* )} */}
    </Box>
  );
};

export default CustomSearch;
