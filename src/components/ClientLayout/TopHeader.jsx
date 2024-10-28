import React from 'react'
import {
    Box,
    Divider,
    Icon,
    IconButton,
    Flex,
    useDisclosure,
    useColorMode,
    Text,
} from '@chakra-ui/react'
import { Colors } from '../../constants/colors'
import { NavLink } from 'react-router-dom'
import { UnAuthenticatedRoutesNames } from '../../utilities/util.constant'
import APP_ICONS from '../../constants/icons'
import Cart from '../../ClientSite/Cart'

const TopHeader = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box
                borderBottom={'0.1px solid grey'}
                px={2}
                py={1}
                width={'100%'}
                zIndex={1}
                color={Colors.WHITE}
                bg={Colors.BODYLIGHT}
                _dark={{
                    bg: Colors.DASHBOARDTHEME,
                    color: Colors.BLACK
                }}
            >
                <Flex justifyContent={'space-between'} alignContent={'center'}>
                    <Flex>
                        <Icon
                            color={Colors.BLACK}
                            _dark={{ color: Colors.WHITE }}
                            as={APP_ICONS.PHONE} />
                        <Text
                            color={Colors.BLACK}
                            _dark={{ color: Colors.WHITE }}
                            mr={2}
                            fontSize={12}
                        >
                            +92 233 243422
                        </Text>
                    </Flex>
                    <Flex>
                        <NavLink to={UnAuthenticatedRoutesNames.LOGIN}>
                            <Text
                                color={Colors.BLACK}
                                _dark={{ color: Colors.WHITE }}
                                mr={2}
                                fontSize={12}
                            >
                                Login
                            </Text>
                        </NavLink>
                        <NavLink to={UnAuthenticatedRoutesNames.WISHLIST}>
                            <Icon
                                mx={2}
                                as={APP_ICONS.WISHLIST}
                                fontSize={16}
                                color={Colors.RED}
                            />
                        </NavLink>
                        <Divider
                            orientation="vertical"
                            borderColor="inherit"
                            height={"20px"}
                            borderWidth="0.5px"
                        />
                                {colorMode === "light" ? (
                                    <Icon
                                        as={APP_ICONS.MOON}
                                        fontSize={20}
                                        color={Colors.BLACK}
                                        onClick={toggleColorMode}
                                        cursor={'pointer'}
                                    />
                                ) : (
                                    <Icon
                                     as={APP_ICONS.SUN}
                                      fontSize={20}
                                       color={Colors.WHITE}
                                       onClick={toggleColorMode}
                                       cursor={'pointer'}
                                       />
                                )
                            }
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default TopHeader
