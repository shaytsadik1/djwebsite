import { Flex, Link, Text } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";

interface Props {
  menus: string[];
}
const CenterMenu = (props: Props) => {
  return (
    <Flex as="nav">
      <HashLink smooth to="#about">
        <Text fontSize="xl" pr={4} _hover={{ fontSize: "1.5rem" }}>
          {props.menus[0]}
        </Text>
      </HashLink>
      <HashLink smooth to="#music">
        <Text fontSize="xl" pr={4} _hover={{ fontSize: "1.5rem" }}>
          {props.menus[1]}
        </Text>
      </HashLink>
      <HashLink smooth to="#gallery">
        <Text fontSize="xl" pr={4} _hover={{ fontSize: "1.5rem" }}>
          {props.menus[2]}
        </Text>
      </HashLink>
      <HashLink smooth to="#contact">
        <Text fontSize="xl" pr={4} _hover={{ fontSize: "1.5rem" }}>
          {props.menus[3]}
        </Text>
      </HashLink>
    </Flex>
  );
};

export default CenterMenu;
