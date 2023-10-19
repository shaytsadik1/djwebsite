import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/whitelogo.svg'

const NavBar = () => {
  return (
    <HStack>
    <Image src={logo} height={'113px'} width={'160px'}/>
    <Text>SHAY TSADIK</Text>
    </HStack>
  )
}

export default NavBar
