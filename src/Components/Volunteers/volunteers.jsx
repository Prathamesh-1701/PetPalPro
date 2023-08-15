import React from 'react';
import {
  Box,
  Center,
  Container,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link,Flex,Button,Image, Avatar
} from '@chakra-ui/react';

const VolunteerPage = () => {
  return (
    <Box>
      <Center bg="#4CAF50" h="200px">
        <Heading color="white">Volunteer with Pet Pal</Heading>
      </Center>
      <Container maxW="xl" py="8">
        <Text fontSize="lg" color="#333" mt="4">
          Join us in making a difference for furry friends! At Pet Pal, we believe that every pet
          deserves a loving home. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          fringilla quam eu lectus tincidunt, vel venenatis arcu luctus. Integer et dapibus ligula.
          Sed sed augue eget metus luctus euismod in vel justo. Fusce et nisi sit amet velit
          luctus convallis.
        </Text>
        <Text fontSize="lg" color="#333" mt="4">
          Vestibulum bibendum ex ac nisl feugiat, sit amet consequat leo lacinia. Ut rhoncus
          sollicitudin urna, et dapibus velit gravida id. Quisque non lacinia nisi. Morbi eu elit
          vel metus fringilla auctor. Phasellus ut ante quam.
        </Text>
        <Heading size="md" color="#333" mt="6">
          Why Volunteer with Pet Pal?
        </Heading>
        <UnorderedList mt="4" color="#333">
          <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
          <ListItem>Nullam congue eros a leo varius, a suscipit purus luctus.</ListItem>
          <ListItem>Curabitur ac elit nec magna dapibus cursus.</ListItem>
        </UnorderedList>
        <Heading size="md" color="#333" mt="6">
          How to Get Involved
        </Heading>
        <Text fontSize="lg" color="#333" mt="4">
          If you're excited about making a positive impact on the lives of animals, we welcome you to
          join our volunteer team. Fill out our{' '}
          <Link color="#4CAF50" href="/volunteer-application">
            volunteer application form
          </Link>{' '}
          today!
        </Text>

        
      </Container>
      
      <Box >
      
      
      
      <Box width={'80%'} border={'1px'}  margin={'8%'} _hover={{border:"1px solid #4CAF50 "}} >
               <Center> <Image
               padding={'1%'}
        borderRadius='full'
        boxSize='150px'
        src='https://bit.ly/dan-abramov'
        alt='Dan Abramov'
        />
        <Text margin={'1%'}>Rescuing a dog was a life-changing experience that filled my heart with joy and purpose. The moment I laid eyes on my furry companion, I knew that my life was about to be enriched beyond measure.

        Bringing this precious soul into my home was a journey of patience, compassion, and unwavering commitment. The transformation I witnessed in my rescued dog was nothing short of miraculous. From the timid and uncertain creature that first entered my life, emerged a confident, loving, and loyal friend.

        Every day felt like a new adventure as we navigated life together. The bond we developed was forged through shared moments of triumph and growth. Teaching my rescued dog to trust, to love, and to embrace the world around us was a privilege that I will forever cherish.

        This experience taught me the true meaning of unconditional love. The joy in those wagging tails, the warmth of those furry cuddles, and the unwavering companionship during both sunny days and stormy nights are priceless treasures that have profoundly impacted my life.

        </Text>

        </Center>
        <Box 
        
        backgroundColor={'Trasperant'} width={'100%'} display={'flex'} justifyContent={'flex-end'} ><Text marginRight={'8%'} as='b'> - Mike Ross </Text></Box>
        </Box>
        <Box width={'80%'} border={'1px'} margin={'8%'} _hover={{border:"1px solid #4CAF50 "}} >
               <Center> <Image
               padding={'1%'}
        borderRadius='full'
        boxSize='150px'
        src='https://bit.ly/dan-abramov'
        alt='Dan Abramov'
        />
        <Text margin={'1%'}>Rescuing a dog was a life-changing experience that filled my heart with joy and purpose. The moment I laid eyes on my furry companion, I knew that my life was about to be enriched beyond measure.

        Bringing this precious soul into my home was a journey of patience, compassion, and unwavering commitment. The transformation I witnessed in my rescued dog was nothing short of miraculous. From the timid and uncertain creature that first entered my life, emerged a confident, loving, and loyal friend.

        Every day felt like a new adventure as we navigated life together. The bond we developed was forged through shared moments of triumph and growth. Teaching my rescued dog to trust, to love, and to embrace the world around us was a privilege that I will forever cherish.

        This experience taught me the true meaning of unconditional love. The joy in those wagging tails, the warmth of those furry cuddles, and the unwavering companionship during both sunny days and stormy nights are priceless treasures that have profoundly impacted my life.

        </Text>

        </Center>
        <Box 
        
        backgroundColor={'Trasperant'} width={'100%'} display={'flex'} justifyContent={'flex-end'} ><Text marginRight={'8%'} as='b'> - Yashraj Thikane </Text></Box>
        </Box>
        <Box width={'80%'} border={'1px'} margin={'8%'} _hover={{border:"1px solid #4CAF50 "}} >
               <Center> 
               {/* <Image
               padding={'1%'}
        borderRadius='full'
        boxSize='150px'
        src='https://bit.ly/dan-abramov'
        alt='Dan Abramov'
        /> */}
        <Avatar 
        padding={'1%'}
        borderRadius='full'
        boxSize='150px'
        // src='https://bit.ly/dan-abramov'
        alt='Dan Abramov'></Avatar>
        <Text margin={'1%'}>I adopted a dog from an adoption page. It was difficult to convince my parents as I had lost my dog a month before (due to death). 
        Anyway, I convinced them. While adopting the dog, the aunt who was handling the dogs had tears in her eyes. She was thankful for us. She couldn't be happier. 
        It was a little difficult for us to take away the dog from her sisters and mother, but we thought he would have a better life with us rather than on the streets. 
        It was the best decision for him and us. Our home was filled with cuteness. Everyone was well taken care of. It was a bit challenging at first to make him behave well,
         but with time and good parenting, we made him a well-behaved dog. We now live happily. I believe Dog adoption is important because it changes their lives and ours. 
         It brings us happiness and makes us believe in ourselves and our patience as parents. It's not about the breed, but how we perceive it and instill values. 
          Additionally adopting a street dog promotes compassion and ki
        </Text>

        
        

        </Center>
        </Box>
        <Box 
        
        backgroundColor={'Trasperant'} width={'100%'} display={'flex'} justifyContent={'flex-end'} ><Text marginRight={'8%'} as='b'> - Neha Karpe </Text></Box>
        </Box>  
        <Center><Text bgGradient='linear(to-l, #58b75c, #c6e6c7)'
        bgClip='text' fontSize={'4xl'}>Thanks for readining</Text></Center>

      <Center>
      <Button
              marginY="1rem"
              color="#ffffff"
              backgroundColor="#4CAF50"
              className="FormFill"
              _hover={{
                bg: '#5cb860',
                cursor: 'pointer',
              }}
            >
              Show more
            </Button>
            </Center>
      
       {/* Footer */}
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
      

    </Box>
    
  );
};

export default VolunteerPage;
