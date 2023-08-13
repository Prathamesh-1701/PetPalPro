import { Box, ChakraProvider ,Flex,Image,Text,Button} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
// import { renderMatches } from 'react-router-dom'
import 'aos/dist/aos.css';
import AOS from 'aos'


const Donate = () => {
  useEffect(()=>{
    AOS.init();
  },[])

  
  return (
    <ChakraProvider>
        <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        paddingTop='60px'
        fontSize='6xl'
        fontWeight='extrabold'
        
      >
        WHY SHOULDN'T YOU DONATE A PET?
      </Text>

      <Flex>
        <Image
            width={'50%'}
            borderRadius={'4%'}
            src='https://imgs.search.brave.com/zmU_Y4I8LfN3aYhYF9b2LDG_U1VtNZWOiZ_W0yNUTZ8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9zdG91cmhvbWUu/b3JnL2Fzc2V0cy91/cGxvYWRzLzIwMjIv/MDkvYWRvcHQuanBn' alt='img'
        >

        </Image>

        <Box 
        paddingTop={'20px'}
        paddingLeft={'20px'}>
        <Text fontSize='3xl'>Responsibility: </Text>
       <Text>Owning a pet is a long-term commitment that comes with responsibilities like providing proper care, medical attention, and companionship. If people give away pets without understanding or fulfilling these responsibilities, it can negatively impact the well-being of the animal.</Text>
        <Text fontSize='3xl'>Attachment and Bonding: </Text>
       <Text>Pets can form strong bonds with their owners. Giving them away can be distressing for both the animal and the owner, especially if the pet has already developed an emotional attachment.</Text>
        <Text fontSize='3xl'>Stress on Animals: </Text>
       <Text>Frequent changes in environment and ownership can cause stress and anxiety for animals. This stress can lead to behavioral problems, health issues, and a decreased quality of life.</Text>
        <Text fontSize='3xl'>Abandonment and Neglect:  </Text>
       <Text>Pets that are given away or "donated" may end up in shelters or worse, abandoned. Overcrowded shelters and limited resources mean that some pets might face neglect or euthanasia.</Text>
       


       </Box>




       
     </Flex>

     <Flex>
     <Box 
        paddingTop={'20px'}
        paddingLeft={'20px'}>
        <Text fontSize='3xl' data-aos="fade-down-right">Health and Well-being:  </Text>
       <Text data-aos="fade-down-right">Pets need consistent care and attention. Handing them over to new owners can affect their physical and emotional health, especially if they are not properly cared for.</Text>
        <Text data-aos="fade-down-right" fontSize='3xl'>Potential for Abuse:</Text>
       <Text data-aos="fade-down-right">Pets that are given away without proper screening of new owners might end up in unsafe or abusive situations.</Text>
        <Text data-aos="fade-down-right" fontSize='3xl'>Lifetime Commitment: </Text>
       <Text data-aos="fade-down-right"> Acquiring a pet should be considered a lifetime commitment. People should think carefully before bringing a pet into their lives and be prepared to care for them throughout their entire life.</Text>
        {/* <Text fontSize='3xl'>Abandonment and Neglect:  </Text>
       <Text>Pets that are given away or "donated" may end up in shelters or worse, abandoned. Overcrowded shelters and limited resources mean that some pets might face neglect or euthanasia.</Text> */}
       


       </Box>

       <Image width={'50%'}
       data-aos="flip-right"
       src='https://imgs.search.brave.com/h_65bwyfPBBOEbp7P5Mn0VigHfpowrhqjMog2s71mV0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy13b21hbi13/aXRoLWhlci1wZXQt/ZnJlbmNoLWJ1bGxk/b2ctcGFya18xMzAz/LTI4NzQxLmpwZz9z/aXplPTYyNiZleHQ9/anBn' alt='img' borderRadius={'4%'}/>
     </Flex>



      <Flex>
      <Text
        bgGradient='linear(to-l, #0086b3, #00ace6)'
        bgClip='text'
        paddingTop='60px'
        fontSize='6xl'
        data-aos="fade-up"
     data-aos-anchor-placement="top-center"
        fontWeight='extrabold'
        width={'50%'}
        
      >
        Still if YOU want to Donate!!
      </Text>

      <Link to='/DonateForm'>
      
      <Button
        // size='md'
        margin='70px'
        // border='2px'
        color='#ffffff'
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
        backgroundColor='#4CAF50'
        className='FormFill'
        _hover={{
          
            bg: '#5cb860',
            cursor: 'pointer',
             }}
           >
        FIll the Donation Form NOW
      </Button>
      </Link>
      </Flex>
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

export default Donate