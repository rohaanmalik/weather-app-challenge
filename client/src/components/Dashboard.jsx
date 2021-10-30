import React from "react";
import {
  VStack,
  IconButton,
  HStack,
  Input,
  Heading,
} from "@chakra-ui/react";
import { FiSearch } from 'react-icons/fi'
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
