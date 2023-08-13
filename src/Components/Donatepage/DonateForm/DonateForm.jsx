import React, { useEffect } from 'react';
import { ChakraProvider,Text,Flex, Box, Container, Heading,Input,FormLabel, FormControl, Textarea, Select, Button } from "@chakra-ui/react";
import './DonateForm.css'; // Import your CSS file for additional styling
import 'aos/dist/aos.css';
import AOS from 'aos'




function Donate() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <ChakraProvider>
    <Box w='100%' h='1400px' 
     bg="url('https://imgs.search.brave.com/epR_HZ_JWIlcnQeKrm68r7qEGuLeI3bOLhn029KPa-8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/dXRlLWRvZy1wZXQt/Y2Fycmllcl8yMy0y/MTUwMjM4Nzc5Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn')"
      backgroundSize="cover"
      data-aos="zoom-in"
      
      
      backgroundPosition="center"
    
    >
      <Box className="container">
        <Container maxW="600px" p={4}>
          <Heading as="h1" mb={4} color={'#4CAF50'}>Pet Donation Form</Heading>
          <form className="form">
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name:</FormLabel>
              <Input type="text" id="name" name="name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="address">Address:</FormLabel>
              <Input type="text" id="address" name="address" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="contactNumber">Contact Number:</FormLabel>
              <Input type="tel" id="contactNumber" name="contactNumber" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="petName">Name of Pet:</FormLabel>
              <Input type="text" id="petName" name="petName" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="ownOtherPets">Do you currently own any other pets?</FormLabel>
              <Select id="ownOtherPets" name="ownOtherPets">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </FormControl>

            <Box >
              <FormControl>
                <FormLabel htmlFor="otherPetsCount">If yes, how many?</FormLabel>
                <Input type="number" id="otherPetsCount" name="otherPetsCount" />
              </FormControl>
            </Box>

            <FormControl isRequired>
              <FormLabel htmlFor="petRoutine">What is the daily routine of the pet like?</FormLabel>
              <Textarea id="petRoutine" name="petRoutine" rows={4} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="reasonForDonation">Why are you donating this pet?</FormLabel>
              <Textarea id="reasonForDonation" name="reasonForDonation" rows={4} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="petDiet">Diet of Pet:</FormLabel>
              <Input type="text" id="petDiet" name="petDiet" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="petAllergies">Is this pet allergic to anything?</FormLabel>
              <Input type="text" id="petAllergies" name="petAllergies" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="petDisease">Does this pet have any disease?</FormLabel>
              <Input type="text" id="petDisease" name="petDisease" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="regularVisits">Do you come to meet this pet regularly?</FormLabel>
              <Select id="regularVisits" name="regularVisits">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </FormControl>

            <Button type="submit" mt={4} 
            margin='70px'
          // border='2px'
          color='#ffffff'
          backgroundColor='#4CAF50'
          className='FormFill'
          _hover={{
            
              bg: '#5cb860',
              cursor: 'pointer',
               }}
            
            >Submit</Button>
          </form>
        </Container>
      </Box>
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
}

export default Donate;
