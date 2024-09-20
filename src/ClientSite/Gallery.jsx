import React from 'react';
import { SimpleGrid, Text, Box } from '@chakra-ui/react';
import GalleryCard from '../components/Mist/GalleryCard';

function Gallery() {
    const designs = [
        {
            name: 'Elegant Kitchen Design',
            image: 'https://www.janelockhart.com/portfolio/images/cottage-core-chic-04.jpg',
            height: '250px',
        },
        {
            name: 'Cozy Living Room Design',
            image: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2022/11/Luxury-interior-design-home-designing-1-scaled.jpeg',
        },
        {
            name: 'Cozy Office Space',
            image: 'https://stealtho.store/wp-content/uploads/2022/07/cozy-working-space-1024x635.webp',
        },
        {
            name: 'Cozy Living Room Retreat',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BVSq53xZ8PNmsMr_9l3hg8qcU4_Jz6Z2vg&s',
        },
        {
            name: 'Elegant Glam Bedroom',
            image: 'https://cdn.shopify.com/s/files/1/0224/3549/6013/files/cozy_glam_bedroom_decor_ideas_1024x1024.jpg?v=1668468867',
        },
        {
            name: 'Modern Kitchen Delight',
            image: 'https://img.freepik.com/premium-photo/elegant-culinary-haven-modern-kitchen-delight_901408-2801.jpg',
        },
        {
            name: 'Rustic Farmhouse Kitchen',
            image: 'https://hips.hearstapps.com/hmg-prod/images/farmhouse-kitchen-green-paint-color-659eebb855988.jpg?crop=0.667xw:0.881xh;0.151xw,0.0531xh&resize=1120:*',
        },
        {
            name: 'Industrial Loft Living Room',
            image: 'https://dropinblog.net/34246798/files/featured/Industrial_Loft_Design-main_image.jpg',
        },
    ];

    return (
        <>
        <Box mt={{base:170,md:10}}>
            <Text fontSize={'2rem'} fontWeight={'bold'} borderBottom={'1px solid grey'}>
                Gallery
            </Text>
            <Box py={8} display={'flex'} justifyContent={'center'} className="collection">
                <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                    spacing={6}
                >
                    {designs.map((singleDesign, index) => (
                        <GalleryCard key={index} cardData={singleDesign} />
                    ))}
                </SimpleGrid>
            </Box>
            </Box>
        </>
    );
}

export default Gallery;
