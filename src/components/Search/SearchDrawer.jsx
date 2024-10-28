import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../constants/colors";

const SearchDrawer = ({disclosure}) => {
    // console.log(disclosure,'disclosure');
    return (
        <>
            <Drawer
               isOpen={disclosure?.isOpen}
               onClose={disclosure?.onClose}
               placement="top"
                size={'lg'}
            >
                <DrawerOverlay />
                <DrawerContent
                    bg={Colors.BODYLIGHT}
                    _dark={{
                        bg: "#5a5a3f",
                    }}>
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>
                    <DrawerBody>
                        <VStack align="stretch" spacing={6}>
                            <FormControl>
                                <Input
                                    placeholder='Search'
                                />
                            </FormControl>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter></DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default SearchDrawer;