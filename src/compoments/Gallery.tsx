import { useState } from 'react'
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
    const [selectedPhoto,setSelectedPhoto] =useState(0)
    
    const handleNext= ()=>{
        setSelectedPhoto((selectedPhoto+1)%photos.length)}
    

    const handlePrev=()=>{
        setSelectedPhoto((selectedPhoto - 1 + photos.length)%photos.length)
    }

  return (

    <HStack justify={"center"} >
      <Button onClick={handlePrev} colorScheme='blue' >
        <Icon as={GrPrevious}  />
      </Button>
      <Image src={photos[selectedPhoto]} width="70%" borderRadius={'16px'}/>
      <Button onClick={handleNext} colorScheme='blue'>
        <Icon as={GrNext} boxSize={4} />
      </Button>
    </HStack>
  )
}

export default Gallery
