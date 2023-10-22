import { VStack, Link, Icon, Box, Text, HStack } from '@chakra-ui/react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'

const LeftFooter = () => {
  return (
    <HStack>
    <VStack pl={8}>
    <Link pr={4} href='"tel:+972524621621"'> 
        <Icon as={BsTelephone} boxSize={6}  _hover={{ transform: "scale(1.2)"}}></Icon>
    </Link>
    <Link pr={4} href='mailto:djshaytsadik@gmail.com'> 
        <Icon as={AiOutlineMail} boxSize={6}  _hover={{ transform: "scale(1.2)"}}></Icon>
    </Link>
    <Link pr={4} href='geo:0,0?q=Allenby+128, Tel Aviv'> 
        <Icon as={GoLocation} boxSize={6} _hover={{ transform: "scale(1.2)"}}></Icon>
    </Link>
    </VStack>
    <VStack>
    <Text>0524621621</Text>
    <Text>djshaytsadik@gmail.com</Text>
    <Text>Allenbey 128, Tel Aviv</Text>
    </VStack>
    </HStack>
  )
}

export default LeftFooter
