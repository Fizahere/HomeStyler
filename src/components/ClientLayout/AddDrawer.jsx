import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    FormLabel,
    Input,
    Textarea,
    VStack,
    Flex,
    FormControl,
} from '@chakra-ui/react'
import { Colors } from '../../../constants/colors'

function AddDrawer({ disclosure }) {
    return (
        <Drawer
            isOpen={disclosure?.isOpen}
            onClose={disclosure?.onClose}
            size={'lg'}
        >
            <DrawerOverlay />
            <DrawerContent
                bg={Colors.THEME}
                _dark={{
                    bg: "#5a5a3f",
                }}>
                <DrawerCloseButton />
                <DrawerHeader>Add Process</DrawerHeader>
                <DrawerBody>
                    <VStack align="stretch" spacing={6}>
                        <FormControl>
                            <FormLabel>Name:</FormLabel>
                            <Input
                                placeholder='Process Name'
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Description:</FormLabel>
                            <Textarea placeholder={'Description'}></Textarea>
                        </FormControl>
                    </VStack>
                </DrawerBody>
                <DrawerFooter></DrawerFooter>
            </DrawerContent>

        </Drawer>
    )
}

export default AddDrawer