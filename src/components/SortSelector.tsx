import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sortOrders = [
    { id: 1, value: "", label: "Relevance" },
    { id: 2, value: "-added", label: "Date added" },
    { id: 3, value: "name", label: "Name" },
    { id: 4, value: "-released", label: "Release date" },
    { id: 5, value: "-metacritic", label: "Popularity" },
    { id: 6, value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (sortOrder) => sortOrder.value === selectedOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Revelance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.id}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
