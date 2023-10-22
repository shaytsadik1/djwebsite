import { Box,Image, Link } from '@chakra-ui/react'
import logo from '../../assets/whitelogo.svg'

const LeftLogo = () => {
  return (
    <Box paddingLeft={4}> {/*logo section*/}
    <Link href='http://localhost:5173/'>
    <Image src={logo} height={'113px'} width={'160px'} _hover={{ transform: { scale: 1.2 } }} />
    </Link>
    </Box>
  )
}

export default LeftLogo
