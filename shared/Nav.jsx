import React from 'react'
import { Flex, Box, Spacer, Heading, Text } from '@chakra-ui/react'
import NextLink from 'next/link';

export const Nav = () => {

return (
    <Flex p={3} position='sticky' top={0} zIndex={1} bg='white'>
        <Box p={2}>
            <NextLink href='/'>
                <Heading size="md">KR.</Heading>
            </NextLink>
        </Box>
        <Spacer />
        {/* <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
            <NextLink href='/about'>
                <Text opacity={0.8}>
                /about 
                </Text>    
            </NextLink>
        </Box> */}
    </Flex>
    )
}
