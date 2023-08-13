import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import './Navigation.css'
import Logo from "./imgs/logo.png"


const Navigation = () => {
  return (
    <Box as="header" bg="gray.900" color="white">
      <Flex align="center" justify="space-between" p={2}>
        {/* Logo */}
        <Link to='/'>
        <Image className='logo' src= {Logo} alt="Logo" w={130} h={75} />
        </Link>

        {/* Navigation Links */}
        <Flex as="nav" align="center">
          <Flex as="ul" listStyleType="none" backgroundColor={"#333"}>
            <li>
              <Link to="/" className="active">
                <Text fontSize="lg" fontWeight="bold" p={2}>
                  Home
                </Text>
              </Link>
            </li>
            <li>
              <Link to="/Adopt" >
                <Text fontSize="lg" fontWeight="bold" p={2}>
                  Adopt
                </Text>
              </Link>
            </li>
            <li>
              <Link to="/Donate">
                <Text fontSize="lg" fontWeight="bold" p={2}>
                  Donate
                </Text>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Text fontSize="lg" fontWeight="bold" p={2}>
                  Volunteer
                </Text>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Text fontSize="lg" fontWeight="bold" p={2}>
                  About
                </Text>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Text fontSize="lg" fontWeight="bold" p={2}>
                  Contact
                </Text>
              </Link>
            </li>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;