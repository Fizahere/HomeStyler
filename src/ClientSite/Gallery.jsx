import React from 'react';
import { SimpleGrid, Text, Box } from '@chakra-ui/react';
import GalleryCard from '../components/Mist/GalleryCard';
import Gallery1 from '../assets/images/gallery1.jpg';
import Gallery2 from '../assets/images/gallery2.jpg';
import Gallery3 from '../assets/images/gallery3.jpg';
import Gallery4 from '../assets/images/gallery4.jpg';
import Gallery5 from '../assets/images/gallery5.jpg';
import Gallery6 from '../assets/images/gallery6.jpg';
import Gallery7 from '../assets/images/gallery7.jpg';
import Gallery8 from '../assets/images/gallery8.jpg';


function Gallery() {
    const designs = [
        {
            name: 'Elegant Kitchen',
            image: Gallery1,
            height: '250px',
        },
        {
            name: 'Cozy Living Room',
            image: Gallery2,
        },
        {
            name: 'Office Space',
            image: Gallery3,
        },
        {
            name: 'Cozy Living Room',
            image: Gallery4,
        },
        {
            name: 'Elegant Bedroom',
            image: Gallery5,
        },
        {
            name: 'Modern Kitchen',
            image: Gallery6,
        },
        {
            name: 'Rustic Kitchen',
            image: Gallery7,
        },
        {
            name: 'Loft Living Room',
            image: Gallery8,
        },
    ];

    return (
        <>
        <Box mt={{base:10,md:10}}>
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
