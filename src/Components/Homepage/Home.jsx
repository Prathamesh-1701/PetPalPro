import React, { useEffect } from 'react';
import { ChakraProvider, Box, Flex, Heading, Text, Button, Image, CSSReset, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion'; // For animations
import Card1 from './imgs/dog.jpg';
import Card2 from './imgs/cat.jpg';
import AOS from 'aos'
import 'aos/dist/aos.css';
import './Home.css';

const Home = () => {
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <ChakraProvider>
      <CSSReset />
      <Box className="home-container" p={0}>
        <motion.div
        
          className="Banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          data-aos-duration="1500"
          // sx={{ filter: 'blur(8px)' }}
        >
          <Heading as="h1" size="xl" mb={4} data-aos="zoom-out-down" data-aos-duration="1500">
            Welcome to the Pet Adoption Center
          </Heading>
          <Text fontSize="lg" mb={6} data-aos="zoom-out-down" data-aos-duration="1500">
            Find your perfect furry companion today!
          </Text>
        </motion.div>

        <Flex direction="column" align="center" maxW="800px" mx="auto">
        
         <Stack>
          <Flex direction="row"  justify="space-between"
          css={{margin:'10px'
              
            }}> 
            
            <Button
              mb={4}
              colorScheme="teal"
              data-aos="zoom-out-down"
              size="lg"
              href="/adopt"
              css={{
                margin:'10px',
                backgroundColor: '#4CAF50', // Your custom color
                '&:hover': {
                  backgroundColor: '#45a049', // Your custom hover color
                },
              }}
            >
              Adopt a Pet
            </Button>
            <Button
            mb={4}
              colorScheme="teal"
              data-aos="zoom-out-down"
              size="lg"
              href="/donate"
              css={{
                margin:'10px',
                backgroundColor: '#4CAF50', // Your custom color
                '&:hover': {
                  backgroundColor: '#45a049', // Your custom hover color
                },
              }}
            >
              Donate
            </Button>
          </Flex>
          </Stack>
          <Button
            mb={4}
              colorScheme="teal"
              data-aos="zoom-out-down"
              size="lg"
              href="/pets"
              css={{
                margin:'10px',
                backgroundColor: '#4CAF50', // Your custom color
                '&:hover': {
                  backgroundColor: '#45a049', // Your custom hover color
                },
              }}
            >
              View Available Pets
            </Button>
        </Flex>

      <Flex direction="row" wrap="wrap" justify="center">
        {/* Cards */}
        {[1, 2, 3, 4, 5].map((index) => (
          <motion.div
            data-aos="zoom-out-down"
            key={index}
            flex="1 0 200px"
            margin="10px"
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Image data-aos="zoom-out-down" src={index % 2 === 0 ? Card1 : Card2} alt="img" />

            <Box className="card-body"
            data-aos="zoom-out-up">
              <Heading as="h5" size="md" mb={2} className="card-title">
                Card title
              </Heading>
              <Text className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Text>
              <Button colorScheme="teal"
              size="lg"
              href="/"
              css={{
                backgroundColor: '#4CAF50', // Your custom color
                '&:hover': {
                  backgroundColor: '#45a049', // Your custom hover color
                },
              }}>
                Go somewhere
              </Button>
            </Box>
          </motion.div>
        ))}
      </Flex>

      <Button
      data-aos="zoom-in-down"
        colorScheme="teal"
              size="lg"
              href="/"
              css={{
                backgroundColor: '#4CAF50', // Your custom color
                '&:hover': {
                  backgroundColor: '#45a049', // Your custom hover color
                },
              }}
      >
        Show More
      </Button>

      <Box className="about-section" data-aos="zoom-in-down">
        <Box className="about-content">
          <Heading as="h2" size="xl" mb={4} className="about-title">
            About PetPal
          </Heading>
          <Text className="about-description">
            PetPal is a dedicated pet adoption platform that aims to connect loving families with adorable pets in need of a forever home.
          </Text>
          <Text className="about-description">
            Our mission is to promote animal welfare and reduce the number of homeless pets by facilitating successful adoptions and raising awareness about responsible pet ownership.
          </Text>
          <Text className="about-description">
            At PetPal, we believe that every pet deserves a loving and caring family. We work closely with shelters, rescue groups, and pet foster homes to provide a seamless adoption process and ensure the well-being of each animal.
          </Text>
        </Box>
      </Box>

      
    </Box>
    </ChakraProvider>
  );
};

export default Home;
