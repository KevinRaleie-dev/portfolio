import { Container, Box, Badge, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const BlogView = () => {
    return (
        <Container mt='2rem' mb='10rem'>
            <Flex>
            <Box ml="3">
                <Text fontSize='xl' fontWeight="bold">
                Blogs.
                    <Badge ml="1" colorScheme="green">
                    Coming soon
                    </Badge>
                </Text>
            </Box>
            </Flex>
        </Container>
    )
}

export default BlogView;