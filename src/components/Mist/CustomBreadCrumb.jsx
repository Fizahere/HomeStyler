import React from 'react';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Colors } from '../../constants/colors';

const CustomBreadcrumb = ({ items }) => {
  return (
    <Box mb={4} p={2} bg={Colors.BODYLIGHT} _dark={{bg:Colors.DASHBOARDTHEME}} borderRadius="md">
      <Breadcrumb separator=">">
        {items.map((item, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink
              href={item.href}
              color={item.isCurrent ? Colors.BUTTON : Colors.GREY}
              _dark={{color:Colors.WHITE}}
              fontWeight={item.isCurrent ? 'bold' : 'normal'}
              _hover={{ color: Colors.GREY, textDecoration:'none' }}             >
              {item.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  );
};

export default CustomBreadcrumb;
