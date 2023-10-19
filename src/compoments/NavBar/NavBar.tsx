import { HStack, Show } from '@chakra-ui/react'
import LeftLogo from './LeftLogo';
import CenterMenu from './CenterMenu';
import RightIcons from './RightIcons';

const NavBar = () => {

  return (
    <HStack justify={"space-between"}>
    <LeftLogo></LeftLogo>
    <Show above='760px'>
    <CenterMenu/>
    </Show>
    <RightIcons/>
    </HStack>
  )
}

export default NavBar
