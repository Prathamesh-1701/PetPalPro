import React from 'react';
import {
  Box,
  Center,
  Container,
  Heading,
  Text,
//   Image,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

const ContactUsPage = () => {
  return (
    <Box>
      <Center bg="#4CAF50" h="200px">
        <Heading color="white">Contact Us</Heading>
      </Center>
      <Container maxW="xl" py="8">
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="#333" mt="4">
          Have questions or feedback? We'd love to hear from you! Please use the form below to
          get in touch with us.
        </Text>
      </Container>

      <Center>
        <Box
          bgColor="#F2F2F2"
          borderRadius="md"
          boxShadow="md"
          padding="2rem"
          width={{ base: '90%', md: '70%' }}
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Your Name" />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your Email" />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your Message" rows="6" />
          </FormControl>
          <Button
            mt="4"
            backgroundColor="#4CAF50"
            type="submit"
            color={'#ffffff'}
            _hover={{
            bg: '#5cb860',
            cursor: 'pointer',
          }}
            _focus={{ boxShadow: 'outline' }}
          >
            Send Message
          </Button>
        </Box>
      </Center>

      <Container maxW="xl" py="8">
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="#333" mt="4">
          We'll get back to you as soon as possible. Thank you for reaching out!
        </Text>
      </Container>

      <Center>
        <Text
          bgGradient="linear(to-l, #58b75c, #c6e6c7)"
          bgClip="text"
          fontSize="4xl"
          margin={'5%'}
        >
          Happy to Help!!
        </Text>
      </Center>
    </Box>
  );
};

export default ContactUsPage;
