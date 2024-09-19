import React, { useState, useEffect } from "react";
import {
  Image,
  Heading,
  Text,
  Box,
  SimpleGrid,
  Button,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { Colors } from "../constants/colors";

function Detail() {
  const [showDetailLoading, setShowDetailLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(""); // State for the main image

  const showDetailMemoMappedData = {
    name: "Fiza",
    network: "Karachi, Pakistan",
    status: "Software Engineer",
    image_thumbnail_path:
      "https://c4.wallpaperflare.com/wallpaper/770/462/564/pretty-girl-pictures-1920x1200-wallpaper-preview.jpg",
    pictures: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTmGCMd6inwlsQpFzOWUSQIbAQ8yM8SXSjrMso8HGOJFV_TiMFvi5rcjxct4fkQP39Jg&usqp=CAU",
      "https://img.freepik.com/free-photo/portrait-sensual-brunette-female-with-long-curly-hair-dressed-warm-black-pullover_613910-7398.jpg",
      "https://cdn.openart.ai/published/WOYx30tbmA9yenrcUJw2/sFcoERZZ_HG2s_1024.webp",
    ],
    episodes: [
      {
        name: "Episode 1",
        episode: 100,
        season: "Netflix",
        air_date: "20/10/23",
      },
      {
        name: "Episode 2",
        episode: 101,
        season: "Netflix",
        air_date: "21/10/23",
      },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDetailLoading(false);
      setSelectedImage(showDetailMemoMappedData.image_thumbnail_path); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} p={"0"}>
          <Box display={"flex"} justifyContent={"space-between"} ml={{ base: "0", md: "5" }}>
            <Box maxW={"800px"}>
              {showDetailLoading ? (
                <Skeleton
                  borderRadius="md"
                  width={{ md: "400px", base: "300px" }}
                  height={{ md: "400px", base: "300px" }}
                  mt={"14px"}
                />
              ) : (
                <Image
                  src={selectedImage}
                  alt={showDetailMemoMappedData.name}
                  borderRadius="md"
                  width={{ md: "600px", base: "500px" }}
                  height={{ md: "400px", base: "300px" }}
                  mt={"14px"}
                />
              )}

              <Box display={"flex"} justifyContent={"space-between"} mt="6" spacing="3">
                <Box>
                  <Heading size="md">
                    {showDetailLoading ? (
                      <SkeletonText noOfLines={1} width="150px" />
                    ) : (
                      showDetailMemoMappedData.name
                    )}
                  </Heading>
                  <Heading size={"sm"}>
                    {showDetailLoading ? (
                      <SkeletonText noOfLines={1} width="200px" />
                    ) : (
                      showDetailMemoMappedData.network
                    )}
                  </Heading>
                  <Text color="blue.600" fontSize="1xl">
                    <a href="#" target="blank">
                      <Button my={"4"} bg={Colors.THEME} color={Colors.WHITE}>
                        {showDetailLoading ? (
                          <Skeleton width="100px" height="20px" />
                        ) : (
                          "Watch Now"
                        )}
                      </Button>
                    </a>
                  </Text>
                </Box>
                <Box>
                  {showDetailLoading ? (
                    <SkeletonText noOfLines={1} width="150px" />
                  ) : (
                    <Text color="blue.600" fontSize="1xl">
                      {showDetailMemoMappedData.status}
                    </Text>
                  )}
                </Box>
              </Box>

              <Heading size={"md"} py={"4"} px={"1"}>
                {showDetailLoading ? (
                  <Skeleton width="100px" height="20px" />
                ) : (
                  "Images"
                )}
              </Heading>
              <SimpleGrid columns={{ base: 2, md: 3 }} spacing={2}>
                {showDetailLoading
                  ? [...Array(3)].map((_, index) => (
                      <Skeleton
                        key={index}
                        borderRadius="md"
                        width={{ md: "150px", base: "150px" }}
                        height={150}
                      />
                    ))
                  : showDetailMemoMappedData.pictures.map((singlePic, index) => (
                      <Image
                        key={index}
                        src={singlePic}
                        alt={`Thumbnail ${index}`}
                        borderRadius="md"
                        width={{ md: "150px", base: "200px" }}
                        height={150}
                        onClick={() => handleThumbnailClick(singlePic)} 
                        cursor="pointer"
                        border={selectedImage === singlePic ? "4px solid #808080" : "none"} 
                        _hover={{ border: "2px solid gray" }} 
                      />
                    ))}
              </SimpleGrid>
            </Box>
          </Box>

          {/* Episodes Section */}
          <Box
            ml={{ base: "0", md: "120px" }}
            borderLeft={{ base: "none", md: "1px solid gray" }}
            p={{ base: "0", md: "3" }}
          >
            <Heading size={"lg"} px={"2"} py={"3"}>
              {showDetailLoading ? (
                <Skeleton width="120px" height="25px" />
              ) : (
                "Episodes"
              )}
            </Heading>
            {showDetailLoading
              ? [...Array(2)].map((_, index) => (
                  <Box
                    key={index}
                    maxW="md"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    p="4"
                    m={"4"}
                    boxShadow="md"
                  >
                    <SkeletonText noOfLines={1} width="200px" mb="2" />
                    <SkeletonText noOfLines={1} width="50px" />
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      mt="2"
                    >
                      <Skeleton width="100px" height="20px" />
                      <Skeleton width="80px" height="20px" />
                    </Box>
                  </Box>
                ))
              : showDetailMemoMappedData.episodes.map((singleEpisode, index) => (
                  <Box
                    key={index}
                    maxW="md"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    p="4"
                    m={"4"}
                    boxShadow="md"
                  >
                    <Heading as="h3" size="md" mb="2">
                      {singleEpisode.name}
                    </Heading>
                    <Text color="gray.400">Episode: #{singleEpisode.episode}</Text>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Text color="gray.400">Season: {singleEpisode.season}</Text>
                      <Text color="gray.500">{singleEpisode.air_date}</Text>
                    </Box>
                  </Box>
                ))}
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Detail;
