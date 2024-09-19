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
            name: 'Elegant Kitchen Design',
            image: 'https://www.janelockhart.com/portfolio/images/cottage-core-chic-04.jpg',
        },
        {
            name: 'Cozy Living Room Design',
            image: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2022/11/Luxury-interior-design-home-designing-1-scaled.jpeg',
        },
        {
            name: 'Elegant Kitchen Design',
            image: 'https://miro.medium.com/v2/resize:fit:1400/1*RQ6RPO0mUf7QYuOkyvXARA.jpeg',
        },
        {
            name: 'Cozy Living Room Design',
            image: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2022/11/Luxury-interior-design-home-designing-1-scaled.jpeg',
        },
        {
            name: 'Elegant Kitchen Design',
            image: 'https://i.pinimg.com/736x/eb/0c/23/eb0c23bf3f195214da6998236bfb3ed8.jpg',
        },
        {
            name: 'Cozy Living Room Design',
            image: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2022/11/Luxury-interior-design-home-designing-1-scaled.jpeg',
        },
    ];

    return (
        <>
        <Box mt={{base:170,md:0}}>
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
