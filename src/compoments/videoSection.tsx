import { Box } from '@chakra-ui/react'
import video from '../assets/wedd low q.mp4'

const VideoSection = () => {
  return (
    <Box width="100%" height="100%">
    <video width="100%"  autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
  </Box>
  )
}

export default VideoSection
