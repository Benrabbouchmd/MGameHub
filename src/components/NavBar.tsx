import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import logoWhite from "../assets/logo-white.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const { colorMode } = useColorMode();
  const themeLogo = colorMode === "light" ? logo : logoWhite;

  return (
    <HStack padding="10px">
      <Image
        src={themeLogo}
        margin="10px"
        boxShadow="-1px 1px 5px -1px rgba(0,0,0,0.2)"
        boxSize="48px"
        borderRadius="10px"
      />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
