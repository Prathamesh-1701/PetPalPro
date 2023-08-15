import React from 'react';
import { ChakraProvider, Box, Text, Input, Radio, RadioGroup, Stack, Button, Flex } from '@chakra-ui/react';
// import './Adopt.css'
import './adoptform2.css'
import { Link } from 'react-router-dom';

const Adopt = () => {
  return (
    <ChakraProvider>
      <Box w="100%" h="1400px" bgGradient="linear(to-r, green.200, orange.300,yellow.500)">
       <Text p="150px"><h1 className="form-title">Pet Adoption Form</h1></Text>
        <div className="form-container">
          
          <form className="pet-form" action="submit_form.php" method="POST">
            <label htmlFor="name">Do you have fenced yard:</label>
            <RadioGroup className="radio-group" id="pet-type" name="pet-type" required>
              <Stack direction="row">
                <Radio value="dog">Yes</Radio>
                <Radio value="cat">No</Radio>
              </Stack>
            </RadioGroup>
            <label htmlFor="name">do you know your rental propertys pet policy</label>
            <RadioGroup className="radio-group" id="pet-type" name="pet-type" required>
              <Stack direction="row">
                <Radio value="dog">Yes</Radio>
                <Radio value="cat">No</Radio>
              </Stack>
            </RadioGroup>

            

            <label htmlFor="phone-number"> Rental Agency Phone Number:</label>
            <Input className="input-field" type="tel" id="phone-number" name="phone-number"  />

            <label htmlFor="name">Is anyone from your home allergic to pets?</label>
            <RadioGroup className="radio-group" id="pet-type" name="pet-type" required>
              <Stack direction="row">
                <Radio value="dog">Yes</Radio>
                <Radio value="cat">No</Radio>
              </Stack>
            </RadioGroup>
            <label htmlFor="num-people">Plese describe if any pet allergies  </label>
            <Input className="input-field" type="number" id="num-people" name="num-people"  />

            <label htmlFor="name">Where will your pet live?</label>
            <RadioGroup className="radio-group" id="pet-type" name="pet-type" required>
              <Stack direction="row">
                <Radio value="dog">Indoor</Radio>
                <Radio value="cat">Outdoor</Radio>
                <Radio value="dog">Fenced Yard</Radio>
                
              </Stack>
            </RadioGroup>

            <label htmlFor="num-people">Why do you want to adopt this pet now?  </label>
            <Input className="input-field" type="number" id="num-people" name="num-people"  />

            <label htmlFor="name">Is this your first pet?</label>
            <RadioGroup className="radio-group" id="pet-type" name="pet-type" required>
              <Stack direction="row">
                <Radio value="dog">Yes</Radio>
                <Radio value="cat">No</Radio>
              </Stack>
            </RadioGroup>

            <label htmlFor="num-people">If no then describe your current pet :  </label>
            <Input className="input-field" type="number" id="num-people" name="num-people"  />

            <Flex direction="row">
            <div className="location">
              <label htmlFor="city">Current Pet Type:</label>
              <Input className="input-field" type="text" id="city" name="city"  />
              <label htmlFor="country">Current Pet Breed:</label>
              <Input className="input-field" type="text" id="country" name="country"  />
              <label htmlFor="state">Current Pet Age:</label>
              <Input className="input-field" type="text" id="state" name="state"  />
              <label htmlFor="pincode">Period of time you have:</label>
              <Input className="input-field" type="text" id="pincode" name="pincode"  />
            </div>
            </Flex>


            <label htmlFor="name">Have you ever given up a pet before </label>
            <RadioGroup className="radio-group" id="pet-type" name="pet-type" required>
              <Stack direction="row">
                <Radio value="dog">Yes</Radio>
                <Radio value="cat">No</Radio>
              </Stack>
            </RadioGroup>

            <label htmlFor="num-people">Plese Describe the situation    </label>
            <Input className="input-field" type="number" id="num-people" name="num-people"  />

            <Flex direction="row" justifyContent="space-evenly">
            <Button className="submit-button" type="submit" colorScheme="Green">Submit</Button>
            <Button className="reset-button" type="reset" >Reset</Button>
            <Link to="/AdoptForm1">
            <Button className="Back-button" type="button" colorScheme="Green">Back</Button>
            </Link>
            </Flex>
          </form>
        </div>
      </Box>
      {/* <Box className="footer">
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
      </Box> */}
    </ChakraProvider>
  );
};

export default Adopt;
