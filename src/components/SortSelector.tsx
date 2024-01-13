import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Revelance
      </MenuButton>
      <MenuList>
        {[1, 2, 3, 4, 5].map((key) => (
          <MenuItem key={key}>Item {key}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
