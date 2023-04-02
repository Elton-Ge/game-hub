import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/all";

function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={15}
        placeholder={"Search games..."}
        variant={"filled"}
      />
    </InputGroup>
  );
}

export default SearchInput;