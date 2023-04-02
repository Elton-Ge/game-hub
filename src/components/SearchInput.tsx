import React, { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/all";

interface Props {
  onSearch: (search: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={15}
          placeholder={"Search games..."}
          variant={"filled"}
          ref={ref}
          // onChange={(event) => onSearch(event.target.value)}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
