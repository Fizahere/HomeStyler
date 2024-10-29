import React, { useState, useEffect } from "react";
import { IconButton, Box, Icon } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import { Colors } from "../../constants/colors";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Box display="flex" justifyContent="right" my={8}>
          <IconButton
            onClick={scrollToTop}
            icon={<Icon as={FaArrowUp} />}
            aria-label="Scroll to top"
            bg={Colors.BUTTON}
            color={Colors.WHITE}
            _hover={{ bg: Colors.THEME }}
            borderRadius="50%"
            size="lg"
          />
        </Box>
      )}
    </>
  );
}

export default ScrollToTopButton;
