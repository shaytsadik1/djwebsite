import { Flex, Link, Icon, useBreakpointValue } from '@chakra-ui/react'
import { useState } from 'react';
import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'
import { ImSoundcloud } from 'react-icons/im'

const RightIcons = () => {
    const iconSize = useBreakpointValue({ sm: 4, md: 6, lg: 8 });
    const icondiff = 4;
  return (
    <Flex paddingRight={4}>
        <Link pr={icondiff} href='https://www.instagram.com/shaytsadik/'> 
        <Icon as={BsInstagram} boxSize={iconSize}  _hover={{ transform: "scale(1.2)"}}></Icon>
        </Link>
        <Link pr={icondiff} href='https://www.facebook.com/shaytsadik'> 
        <Icon as={BsFacebook} boxSize={iconSize} _hover={{ transform: "scale(1.2)"}} ></Icon>
        </Link>
        <Link pr={icondiff} href='https://www.youtube.com/@shaytsadik'> 
        <Icon as={BsYoutube} boxSize={iconSize}  _hover={{ transform: "scale(1.2)"}}></Icon>
        </Link>
        <Link pr={icondiff} href='https://soundcloud.com/shay-tsadik'> 
        <Icon as={ImSoundcloud} boxSize={iconSize}  _hover={{ transform: "scale(1.2)"}}></Icon>
        </Link>
    </Flex>
  )
}

export default RightIcons
