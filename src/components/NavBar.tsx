import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image
        src={logo}
        margin="10px"
        boxShadow="-1px 1px 5px -1px rgba(0,0,0,0.2)"
        boxSize="48px"
        borderRadius="10px"
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
