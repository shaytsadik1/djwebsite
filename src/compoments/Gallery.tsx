import { useEffect, useState } from 'react'
import photo1 from '../assets/galleryPhotos/1.jpg'
import photo2 from '../assets/galleryPhotos/2.jpg'
import photo3 from '../assets/galleryPhotos/3.jpg'
import photo4 from '../assets/galleryPhotos/4.jpg'
import photo5 from '../assets/galleryPhotos/5.jpg'
import photo6 from '../assets/galleryPhotos/6.jpg'
import photo7 from '../assets/galleryPhotos/7.jpg'
import photo8 from '../assets/galleryPhotos/8.jpg'
import { Box, Button, Center, HStack, Icon, Image } from '@chakra-ui/react'
import { GrPrevious,GrNext } from 'react-icons/gr'



const Gallery = () => {
   
    const photos=[photo1,photo2,photo3,photo4,photo5,photo6,photo7,photo8]
    const [selectedPhotoLeft,setSelectedPhotoLeft] =useState(0)
    const [selectedPhotoCenter,setSelectedPhotoCenter] =useState(1)
    const [selectedPhotoRight,setSelectedPhotoRight] =useState(2)
  
    const previousClick = () => {
    setSelectedPhotoLeft((selectedPhotoLeft - 1 + photos.length) % photos.length);
    setSelectedPhotoCenter((selectedPhotoCenter - 1 + photos.length) % photos.length);
    setSelectedPhotoRight((selectedPhotoRight - 1 + photos.length) % photos.length);
}


    const nextClick =()=> {
        setSelectedPhotoLeft((selectedPhotoLeft+1)%photos.length)
        setSelectedPhotoCenter((selectedPhotoCenter+1)%photos.length)
        setSelectedPhotoRight((selectedPhotoRight+1)%photos.length)   

    }


  return (
    

    <HStack justify={'center'}>
    <Box boxSize={20} pl={19}> 
    <Button onClick={previousClick} > 
        <Icon as={GrPrevious} boxSize={10} color={'white'} ></Icon>
    </Button>
    </Box>
    <HStack spacing={4} justify={'center'} >
                <Image src={photos[selectedPhotoLeft]} maxW={'30%'} borderRadius="lg"/>
                <Image src={photos[selectedPhotoCenter] }maxW={'30%'} borderRadius="lg" />
                <Image src={photos[selectedPhotoRight] }maxW={'30%'}  borderRadius="lg"/>
            </HStack>
    <Box boxSize={20} pr={22}>        
    <Button onClick={nextClick}> 
        <Icon as={GrNext} boxSize={10} color={'white'}> </Icon>     
    </Button>
    </Box >
    </HStack>
   
  )
}

export default Gallery
