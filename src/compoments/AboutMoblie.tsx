import {  Center, Text, useBreakpointValue } from "@chakra-ui/react"
const AboutMoblie = () => {
    const textSize = useBreakpointValue({ sm: 'xs', md: 'md'})
  return (
    <Text fontSize={{ base: "12px", md:"20px" }} align={'center'}>
            Nice to meet you, my name is Shay and I am a wedding and nightlife DJ from Tel Aviv.<br/>

            I am a leading DJ in Tel Aviv's nightlife scene, playing every night in the most prestigious bars and clubs, and also performing at the biggest festivals in Israel.<br/>

            With the extensive experience I gained, I learned to read the crowd perfectly and adjust the music precisely to all the guests at the event, so that everyone would stay in the square all night.<br/>

            Before each event, I spend a lot of time talking with my couples and carefully planning the event from a musical point of view from end to end - from the moment of the reception to the last of the celebrants.<br/>
            </Text>
  )
}

export default AboutMoblie
