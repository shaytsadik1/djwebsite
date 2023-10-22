import { Box, Center, Flex, Grid, GridItem, HStack, Image, Text, useBreakpointValue } from "@chakra-ui/react"
import photo from '../assets/17-90-min-min-1.jpeg'

const About = () => {
    
  return (
    <Center>
    <HStack justify={"space-between"}>  
            <Image src={photo} height={"300px"} width={"600px"} style={{ borderRadius: "16px" }} paddingLeft={50}/>
            <Box maxW="45%" paddingRight={5}>
            <Text fontSize={{ lg: "16px", xl:"22px" }}>
            Nice to meet you, my name is Shay and I am a wedding and nightlife DJ from Tel Aviv.<br/>

            I am a leading DJ in Tel Aviv's nightlife scene, playing every night in the most prestigious bars and clubs, and also performing at the biggest festivals in Israel.<br/>

            With the extensive experience I gained, I learned to read the crowd perfectly and adjust the music precisely to all the guests at the event, so that everyone would stay in the square all night.<br/>

            Before each event, I spend a lot of time talking with my couples and carefully planning the event from a musical point of view from end to end - from the moment of the reception to the last of the celebrants.<br/>
            </Text>
            </Box>
    </HStack>
    </Center>
  )
}

export default About
