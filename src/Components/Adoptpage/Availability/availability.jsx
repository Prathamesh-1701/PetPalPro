      
import React from 'react'
import { ChakraProvider, Box, Flex, Heading, Text, Center,Button, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion'; // For animations
import Card1 from './imgs/dog.jpg';
import Card2 from './imgs/cat.jpg';
import { Link } from 'react-router-dom';

const availability = () => {
  return (
   <ChakraProvider>
   <Flex direction="row" wrap="wrap" justify="center">
   <Box width={"100%"} alignItems={'center'}><Text paddingLeft={'30%'} fontSize='6xl'>Choose Your furry Pal</Text></Box>
        {/* Cards */}
        
        {[1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,1,1,1,1,1,1,1,1,1,1,2,2,2,2].map((index) => (
          <motion.div
            key={index}
            flex="1 0 200px"
            margin="10px"
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Image src={index % 2 === 0 ? Card1 : Card2} alt="img" />

            <Box className="card-body">
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
      <Link to='/AdoptForm1'>
      <Center bg='#4CAF50' h='100px' color='white'fontSize="xl" fontWeight="bold">
        Fill Adoption Form Now!!
      </Center>

      </Link>

      <Box className="footer">
        <Box className="footer-content">
          <Text>&copy; 2023 PetPal Center. All rights reserved.</Text>
          <Flex as="nav" className="footer-links">
            <Text as="a" href="/about" mr={4}>
              About
            </Text>
            <Text as="a" href="/contact" mr={4}>
              Contact
            </Text>
            <Text as="a" href="/privacy">
              Privacy Policy
            </Text>
          </Flex>
        </Box>
      </Box>


   </ChakraProvider>
  )
}

export default availability