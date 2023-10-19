import { Box,Image } from '@chakra-ui/react'
import logo from '../../assets/whitelogo.svg'

const LeftLogo = () => {
  return (
    <Box paddingLeft={4}> {/*logo section*/}
        <Image src={logo} height={'113px'} width={'160px'}/>
    </Box>
  )
}

export default LeftLogo
