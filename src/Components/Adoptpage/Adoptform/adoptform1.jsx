import React from 'react';
import { ChakraProvider, Box, Text, Input, Select, Radio, RadioGroup, Stack, Button, Flex } from '@chakra-ui/react';
import './adoptform1.css'
import { Link } from 'react-router-dom';

const Adopt = () => {
  return (
    <ChakraProvider>
      <Box w="100%" h="1400px" bgGradient="linear(to-r, green.200, orange.300,yellow.500)">
       <Text p="100px"><h1 className="form-title">Pet Adoption Form</h1></Text>
        <div className="form-container">
          
          <form className="pet-form" action="submit_form.php" method="POST">
            <label htmlFor="name">Name:</label>
            <Input className="input-field" type="text" id="name" name="name" required />

            <label htmlFor="address">Address:</label>
            <Input className="input-field" type="text" id="address" name="address" required />
            <Flex direction="row">
            <div className="location">
              <label htmlFor="city">City:</label>
              <Input className="input-field" type="text" id="city" name="city" required />
              <label htmlFor="country">Country:</label>
              <Input className="input-field" type="text" id="country" name="country" required />
              <label htmlFor="state">State:</label>
              <Input className="input-field" type="text" id="state" name="state" required />
              <label htmlFor="pincode">Pincode:</label>
              <Input className="input-field" type="text" id="pincode" name="pincode" required />
            </div>
            </Flex>

            <label htmlFor="phone-number">Phone Number:</label>
            <Input className="input-field" type="tel" id="phone-number" name="phone-number" required />

            <label htmlFor="age">Age:</label>
            <Input className="input-field" type="number" id="age" name="age" required />

            <label>What kind of pet do you want?</label>
            <RadioGroup className="radio-group" id="pet-type" name="pet-type" required>
              <Stack direction="row">
                <Radio value="dog">Dog</Radio>
                <Radio value="cat">Cat</Radio>
                <Radio value="bird">Bird</Radio>
              </Stack>
            </RadioGroup>

            <label htmlFor="emergency-contact-name">Emergency Contact Name:</label>
            <Input className="input-field" type="text" id="emergency-contact-name" name="emergency-contact-name" required />

            <label htmlFor="emergency-contact-phone">Emergency Contact Phone Number:</label>
            <Input className="input-field" type="tel" id="emergency-contact-phone" name="emergency-contact-phone" required />

            <label htmlFor="home-type">Type of Home:</label>
            <Select className="select-field" id="home-type" name="home-type" required>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
            </Select>

            <label htmlFor="num-people">How many people in the home?</label>
            <Input className="input-field" type="number" id="num-people" name="num-people" required />

            {/* Add more fields as needed */}
            
            <Link to="/AdoptForm2">  
            <Button className="submit-button" 
                  type="submit" 
                  bgColor="#4CAF50"
                  color="#ffff"
                  _hover={{
                    bg:'#5cb860',
                    cursor: 'pointer',
                  }}
                  >
            Next</Button>
            </Link>
            <Link to="/Adopt">  
            <Button className="submit-button" type="submit" 
             _hover={{
                    bg:'#5cb860',
                    cursor: 'pointer',
                  }}
            >Back</Button>
            </Link>
            {/* <Button className="reset-button" type="reset" colorScheme="red">Reset</Button> */}
          </form>
        </div>
      </Box>
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
  );
};

export default Adopt;
