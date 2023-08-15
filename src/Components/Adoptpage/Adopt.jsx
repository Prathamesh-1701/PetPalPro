// import React from 'react'
import React, { useEffect } from 'react'

// import React from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Text,
  Center,
  Image,
  Heading
  
} from '@chakra-ui/react';
import {Link} from 'react-router-dom'
// import Pic from './imgs/adoptformbg.webp'
import AOS from 'aos'

const Adopt = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <ChakraProvider>

      <Box>
      <Center bg="#4CAF50" h="200px">
        <Heading color="white">Adopting a Pet</Heading>
      </Center>
        {/* Title */}
        <Text fontSize={['3xl', '4xl', '6xl']} bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text' fontWeight="extrabold" textAlign="center" px={4} py={8}>
          WHY SHOULD YOU ADOPT A PET?
        </Text>

        {/* Images */}
        <Flex
          direction={['column', 'row']}
          align={['center', 'stretch']}
          justify="space-between"
          px={4}
        >
          <Box boxSize={['100%', '23%']} mb={[4, 0]}>
            <Image src="https://imgs.search.brave.com/dwbsFojLTqxJ_YJBdCDNty9Jih6UyAXanJDX1zOeMko/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjE0/MDMwODcwL3ZlY3Rv/ci9wYXdzLXVwLWJh/Y2tncm91bmQtdmVj/dG9yLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1jMnJ2MWFS/dUVMUy1BMk1JR1Jn/UHByanQwb2ZoNmxh/T3gxNXc2NEctdnNj/PQ" alt="Image 1" />
          </Box>
          <Box boxSize={['100%', '23%']} mb={[4, 0]}>
            <Image src="https://imgs.search.brave.com/dwbsFojLTqxJ_YJBdCDNty9Jih6UyAXanJDX1zOeMko/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjE0/MDMwODcwL3ZlY3Rv/ci9wYXdzLXVwLWJh/Y2tncm91bmQtdmVj/dG9yLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1jMnJ2MWFS/dUVMUy1BMk1JR1Jn/UHByanQwb2ZoNmxh/T3gxNXc2NEctdnNj/PQ" alt="Image 1" />
          </Box>
        </Flex>

        {/* Content */}
        <Box px={4} pb={8}>
          {/* ... Text content ... */}
          <Text data-aos="fade-down-right" data-aos-duration="1500" fontSize='3xl'>Companionship: </Text>
       <Text data-aos="fade-down-right" data-aos-duration="1500">Pets offer companionship and unconditional love. They can be a source of comfort and emotional support, especially for individuals who live alone or are going through challenging times.</Text>
       <Text data-aos="fade-down-right" fontSize='3xl'>Reduced Stress: </Text>
       <Text data-aos="fade-down-right">Interacting with pets, such as petting a cat or walking a dog, has been shown to lower stress levels and reduce feelings of anxiety. Their presence can have a calming effect on humans.</Text>
       <Text data-aos="fade-down-right" fontSize='3xl'>Physical Activity: </Text>
       <Text data-aos="fade-down-right"> Owning a pet, particularly a dog, encourages physical activity through activities like walking, playing, and exercising. This can lead to improved fitness and overall health.</Text>
       <Text data-aos="fade-down-right" fontSize='3xl'>Routine and Responsibility </Text>
       <Text data-aos="fade-down-right">Caring for a pet requires establishing a routine for feeding, grooming, and exercise. This sense of responsibility can help individuals develop better time management and organizational skills.</Text>
       <Text data-aos="fade-down-right" fontSize='3xl'>Social Interaction: </Text>
       <Text data-aos="fade-down-right">Pets can be great conversation starters and provide opportunities for social interaction. Taking your dog to a park or participating in pet-related events can lead to connections with other pet owners.</Text>
       <Text data-aos="fade-down-right" fontSize='3xl'>Mental Health Benefits:  </Text>
       <Text data-aos="fade-down-right">Pets have been shown to positively impact mental health by reducing feelings of loneliness, providing a sense of purpose, and increasing feelings of happiness and joy.</Text>
       <Text data-aos="fade-down-right" fontSize='3xl'>Teaching Empathy: </Text>
       <Text data-aos="fade-down-right">Caring for a pet teaches empathy and compassion. Children especially can learn valuable life lessons about empathy, nurturing, and understanding the needs of others.</Text>
       <Text data-aos="fade-down-right" fontSize='3xl'>Loyal Companions: </Text>
       <Text data-aos="fade-down-right">Pets, especially dogs, are known for their loyalty. They can form deep bonds with their owners, offering unwavering companionship and a strong emotional connection.</Text>
       <Text data-aos="fade-down-right" fontSize='3xl'>Rescue and Adoption: </Text>
       <Text data-aos="fade-down-right">By adopting a pet from a shelter or rescue organization, you're giving a second chance to an animal that might otherwise face uncertain circumstances. Adopting helps reduce the demand for breeding and supports the rescue of animals in need.</Text>
       <Text data-aos="fade-down-right" fontSize='3xl'>Entertainment and Joy </Text>
       <Text data-aos="fade-down-right">Pets can be highly entertaining with their playful antics, funny behaviors, and unique personalities. Their presence often brings moments of joy and laughter into our lives.</Text>

        </Box>

        {/* Buttons */}
        <Flex direction="column" align="center" px={4} pb={8}>
          <Link to="/AdoptForm1">
            <Button
              width={['100%', 'auto']}
              mt={4}
              color="#ffffff"
              backgroundColor="#4CAF50"
              _hover={{
                bg: '#5cb860',
                cursor: 'pointer',
              }}
            >
              Fill the Adoption Form NOW
            </Button>
          </Link>
          <Link to="/">
            <Button
              width={['100%', 'auto']}
              mt={4}
              color="#ffffff"
              backgroundColor="#4CAF50"
              _hover={{
                bg: '#5cb860',
                cursor: 'pointer',
              }}
            >
              Back to Home
            </Button>
          </Link>
        </Flex>

        {/* Availability */}
        <Link to="/Availability">
          <Center
            bg="#4CAF50"
            h={['auto', '100px']}
            color="white"
            fontSize={['md', 'xl']}
            fontWeight="bold"
            p={[2, 4]}
            mt={8}
          >
            Click here to check availability
          </Center>
        </Link>

        {/* Save Us Button */}
        <Box
          width="100%"
          height={['300px', '700px']}
          backgroundImage="url('https://imgs.search.brave.com/UZlJQypox1ebKYMvGfOls3YSbli5BAGuhi6dEfhnKTo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cm91cC1wb3J0cmFp/dC1hZG9yYWJsZS1w/dXBwaWVzXzUzODc2/LTY0Nzc4LmpwZz9z/aXplPTYyNiZleHQ9/anBn')"
          backgroundSize="cover"
          backgroundPosition="center"
          borderRadius="md"
          _hover={{
            backdropFilter: 'blur(0px)',
          }}
          px={4}
        >
          <Flex justifyContent="center" align="center" p={[2, 4]} mt={[2, 8]}>
            <Button
              width={['100%', '600px']}
              height={['auto', '80px']}
              border="1px solid #4CAF50"
              color="#4CAF50"
              _hover={{
                backgroundColor: '#4CAF50',
                color: '#fff',
                border: '1px white',
              }}
            >
              Save Us!
            </Button>
          </Flex>
        </Box>

        {/* Footer */}
       
      </Box>
    </ChakraProvider>
  );
};

export default Adopt;
