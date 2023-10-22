import { Flex, Link, Text } from '@chakra-ui/react'
interface Props{
    menus:string[];
}
const CenterMenu = (props:Props) => {
  return (
    <Flex as="nav" >
        <Text fontSize='xl' pr={4} _hover={{ fontSize: "1.5rem" }} >{props.menus[0]} </Text>
        <Text fontSize='xl' pr={4} _hover={{ fontSize: "1.5rem" }}>{props.menus[1]}</Text>
        <Text fontSize='xl' pr={4} _hover={{ fontSize: "1.5rem" }}>{props.menus[2]}</Text>
        <Text fontSize='xl' pr={4} _hover={{ fontSize: "1.5rem" }}>{props.menus[3]}</Text>
    </Flex>
  )
}

export default CenterMenu
