import { Flex, Link } from '@chakra-ui/react'
const CenterMenu = () => {
  return (
    <Flex as="nav" >
        <Link pr={4}>Home</Link>
        <Link pr={4}>About</Link>
        <Link pr={4}>Services</Link>
        <Link pr={4}>Contact</Link>
    </Flex>
  )
}

export default CenterMenu
