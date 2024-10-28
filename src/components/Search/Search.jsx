import { useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../constants/colors";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";

const CustomSearch = ({handleToggleOfSearch}) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      const searchPath = UnAuthenticatedRoutesNames.SEARCH.replace(
        ":query",
        searchQuery.trim()
      );
      navigate(searchPath);
      setSearchQuery("");
      handleToggleOfSearch();
    }
  };
  // console.log(searchToggle,'searchToggle');
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const handleCloseClick = () => {
  //   setIsSearchOpen(false);
  //   setSearchToggle(!searchToggle)
  //   setSearchQuery("");
  // };

  return (
    <Box position="relative"
     bg={Colors.BODYLIGHT} _dark={{bg:Colors.DASHBOARDTHEME}}
     >
      {/* {!isSearchOpen ? (
        <IconButton
          icon={<AiOutlineSearch />}
          onClick={handleSearchIconClick}
          aria-label="Open Search"
          variant="ghost"
        />
      ) : ( */}
      <Box
        bg={Colors.BODYLIGHT}
        _dark={{bg:Colors.DASHBOARDTHEME}}
        position="absolute"
        top="0"
        right="0"
        p={2}
        borderRadius="md"
        boxShadow="lg"
        zIndex="popover"
        width="100%"
      >
        {/* <Flex alignItems="center"> */}
        <Input
        // color={Colors.BODYLIGHT}
        // _dark={{color:Colors.DASHBOARDTHEME}}
          border={"1px solid grey"}
          // h="70px"
          h={{ base: "50px", md: "70px" }}
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
          autoFocus
          focusBorderColor={Colors.THEME}
          bg={Colors.BODYLIGHT}
          _dark={{bg:Colors.DASHBOARDTHEME}}
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
