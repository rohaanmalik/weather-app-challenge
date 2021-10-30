import React from "react";
import {
  VStack,
  IconButton,
  HStack,
  Input,
  Heading,
} from "@chakra-ui/react";
import { FiSearch } from 'react-icons/fi'

export default function SearchBar() {
    return (
      <VStack>
        <Heading mb="8" size="xl">
          Search your zip
        </Heading>
        <HStack>
          <Input
            type="text"
            placeholder="Enter city name"
            // value={result}
            // onChange={(event) => setResult(event.target.value)}
          />
          <IconButton
            aria-label="Search city button"
            icon={<FiSearch />}
          ></IconButton>
        </HStack>
      </VStack>
    );
}