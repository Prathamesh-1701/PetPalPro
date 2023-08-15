import React from 'react'
import {Box,Flex,Text} from '@chakra-ui/react'

const footer = () => {
  return (
    <Box className="footer">
        <Box className="footer-content">
          <Text>&copy; 2023 PetPal Center. All rights reserved.</Text>
          <Text>Prathamesh Dantkale</Text>
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
  )
}

export default footer