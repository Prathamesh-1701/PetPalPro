import React from 'react';
import {
  Box,
  Center,
  Container,
  Heading,
  Text,
  Image,
  Avatar,
} from '@chakra-ui/react';
import logo from './imgs/logo.png'

const AboutPage = () => {
  return (
    <Box>
      <Center bg="#4CAF50" h="200px">
        <Heading color="white">About PetPal</Heading>
      </Center>
      <Container maxW="xl" py="8">
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="#333" mt="4">
          At PetPal, we are dedicated to creating a world where every pet finds a loving and
          forever home. Our mission is to rescue, rehabilitate, and rehome animals in need,
          ensuring their well-being and happiness.
        </Text>
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="#333" mt="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla quam eu
          lectus tincidunt, vel venenatis arcu luctus. Integer et dapibus ligula. Sed sed augue
          eget metus luctus euismod in vel justo. Fusce et nisi sit amet velit luctus convallis.
        </Text>
      </Container>

      <Center>
        <Image
          src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2428&q=80/400x300"
          alt="PetPal Image"
          borderRadius="md"
          boxShadow="md"
          marginY="2rem"
          maxW="100%"
          padding={'5%'}
        />
      </Center>

      <Container maxW="xl" py="8">
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="#333" mt="4">
          Our team of dedicated volunteers and professionals work tirelessly to provide the best
          care and support for animals in need. From rescuing abandoned pets to providing medical
          attention and finding them loving homes, we are committed to making a positive impact on
          the lives of these furry companions.
        </Text>
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="#333" mt="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla quam eu
          lectus tincidunt, vel venenatis arcu luctus. Integer et dapibus ligula. Sed sed augue
          eget metus luctus euismod in vel justo. Fusce et nisi sit amet velit luctus convallis.
        </Text>
      </Container>

      <Center>
        <Box
          bgColor="#4CAF50"
          color="white"
          borderRadius="md"
          boxShadow="md"
          padding="1rem"
          width={{ base: '90%', md: '80%' }}
          textAlign="center"
        >
          <Heading size={{ base: 'lg', md: 'xl' }}>Join Us Today!</Heading>
          <Text mt="2">
            Help us make a difference in the lives of animals. Whether you want to volunteer,
            donate, or adopt, your support matters. Together, we can create a better world for
            pets.
          </Text>
        </Box>
      </Center>

      <Container maxW="xl" py="8">
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="#333" mt="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla quam eu
          lectus tincidunt, vel venenatis arcu luctus. Integer et dapibus ligula. Sed sed augue
          eget metus luctus euismod in vel justo. Fusce et nisi sit amet velit luctus convallis.
        </Text>
      </Container>

      <Center>
        <Box
          bgColor="#4CAF50"
          color="white"
          borderRadius="md"
          padding="1rem"
          width={{ base: '90%', md: '80%' }}
          textAlign="center"
          marginBottom="2rem"
        >
          <Heading size={{ base: 'lg', md: 'xl' }}>Contact Us</Heading>
          <Text mt="2">
            Have questions or want to get involved? Contact us at info@petpal.com or call
            1234567890.
          </Text>
        </Box>
      </Center>

      <Center margin={'4%'}>
        <Avatar
          size="xl"
          name="PetPal Logo"
          src={logo}
          boxShadow="lg"
        />
      </Center>
    </Box>
  );
};

export default AboutPage;
