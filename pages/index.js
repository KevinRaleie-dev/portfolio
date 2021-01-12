import { Container, Heading, Text, Box, HStack, IconButton, Stack } from '@chakra-ui/react'
import {FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa';
import Head from 'next/head'
import Image from 'next/image';
import { Nav } from '../shared/Nav'
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { BlogView } from './components/BlogView';

export default function Home() {
  const variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
  }
  return (
    <>
      <Head>
        <title>Kevin Raleie | Home</title>
      </Head>
      <Nav />
      <Container mt='0.5rem'>
        <Box
         display='flex'
         flexDirection='column'
         justifyContent='center'
         alignItems='center'
        >
          <motion.div initial='hidden' animate='visible' variants={variants}>
            <Image 
              src='/profile-pic.png'
              width='100px'
              height='100px'
              alt='avatar'
                />
          </motion.div>
          <Heading mt={3}>
            Hi 👋🏼,
          </Heading>
          <Text mt={2} fontWeight='bold' align='center'>
            I'm Kevin Raleie.
          </Text>
          <Text fontSize='sm' mt={2} >
            I am a software developer, self-taught full stack web developer
            who loves writing <code>code</code> for both the backend and the frontend. Yes i'm 
            that flexible😅. 
            <br/>
            <br/>
            I love solving problems and being a developer allows me to put those skills
            in practice, allowing me to pay attention to details when working on a project.
            <br/>
            <br/>
            I mainly use JavaScript and TypeScript for backends but I'm also familiar
            with C#, Java for Android apps and React for web frontends.
            <br/>
            <br/>
            I'm interested in working on ambitious projects with positive people.
          </Text>
          <HStack mt={4} spacing="20px">
            <Box w="40px" h="40px">
              <NextLink href='https://github.com/KevinRaleie-dev'>
                <IconButton
                aria-label='github'
                icon={<FaGithub />}
                />
              </NextLink>
            </Box>
            <Box w="40px" h="40px">
              <NextLink href='https://twitter.com/K_Raleie'>
                <IconButton
                aria-label='twitter'
                icon={<FaTwitter/>}
                />
              </NextLink>
            </Box>
            <Box w="40px" h="40px">
              <NextLink href='https://www.instagram.com/kevinraleie/'>
                <IconButton
                aria-label='instagram'
                icon={<FaInstagram/>}
                />
              </NextLink>
            </Box>
          </HStack>
          <Box mt='8' w='130px' backgroundColor='gray.600' height='1px' />
        </Box>
      </Container>
      <BlogView />
    </>
  )
}
