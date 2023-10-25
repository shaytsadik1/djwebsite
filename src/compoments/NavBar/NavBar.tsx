import { HStack, Show } from "@chakra-ui/react";
import LeftLogo from "./LeftLogo";
import CenterMenu from "./CenterMenu";
import RightIcons from "./RightIcons";

const NavBar = () => {
  const menuNames = ["About", "Music", "Gallery", "Contact Me"];

  return (
    <HStack justify={"space-between"}>
      <LeftLogo></LeftLogo>
      <Show above="760px">
        <CenterMenu menus={menuNames} />
      </Show>
      <RightIcons />
    </HStack>
  );
};

export default NavBar;
