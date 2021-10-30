import {
  IconButton, VStack
} from "@chakra-ui/react";
import React from "react";
import SearchBar from "./SearchBar";


export default function Dashboard() {

  return (
    <VStack>
      <IconButton
        aria-label="Toggle Dark Mode"
        m="8"
        size="md"
        alignSelf="flex-end"
      />
    <SearchBar/>
    </VStack>
  );
}
