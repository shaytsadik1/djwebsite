import { Box, Divider, HStack, Icon, Image, Link, VStack } from '@chakra-ui/react'
import logo from '../assets/whitelogo.svg'
import {AiOutlineMail} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {BsTelephone} from 'react-icons/bs'
import LeftFooter from './LeftFooter'
import RightIcons from './NavBar/RightIcons'

const Footer = () => {
  return (
    <Box >
    <Divider borderColor="white" my={4} />
    <HStack justify={'space-between'}>
    <LeftFooter/>
    <Image pr={4} src={logo} height={'113px'} width={'160px'}/>
    <RightIcons/>
    </HStack>
    </Box>
  )
}

export default Footer
