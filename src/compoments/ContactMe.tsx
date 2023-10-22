import { Box, Center, Icon, Link, Text } from '@chakra-ui/react'
import React from 'react'
import {BsWhatsapp} from 'react-icons/bs'

const ContactMe = () => {
  return (
    <Box>
    <Text fontSize={'3xl'}>
    Or Just Text Me On Whatsapp
    </Text>
    <Center>
    <Link pr={4} mt={4} href='https://wa.me/972524621621'> 
         <Icon as={BsWhatsapp} boxSize={20}  _hover={{ transform: "scale(1.2)"}}></Icon>
    </Link>
    </Center>
    </Box>
  )
}

export default ContactMe
