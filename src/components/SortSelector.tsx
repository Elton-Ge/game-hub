import React from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/all";

interface Props {
  onSelectOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}

function SortSelector({ onSelectOrder, selectedSortOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-added", label: "Date added" },
    { value: "-rating", label: "Average rating" },
    { value: "-metacritic", label: "Popularity" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              key={order.value}
              onClick={() => onSelectOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default SortSelector;
