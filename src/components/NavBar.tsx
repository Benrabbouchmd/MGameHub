import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={logo}
        margin="10px"
        boxShadow="-1px 1px 5px -1px rgba(0,0,0,0.2)"
        boxSize="48px"
        borderRadius="10px"
      />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
