import {
  Heading, HStack, IconButton, Input, VStack
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherAsync } from "../redux/slices/weatherSlices";

export default function SearchBar() {

  const [zip, setZip] = useState("");
  const [result, setResult] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getWeatherAsync({ zip: "37934" }));
  }, []);

  
  //select state from store
  const state = useSelector(state => state);
  const { weather, loading, error } = state;
  // console.log(state);
  

    const onSubmit = (event) => {
      if (zip) {
        dispatch(
          getWeatherAsync({
            zip
          })
        );
      }
    };

    return (
      <VStack>
        <Heading mb="8" size="xl">
          Search your zip
        </Heading>
        <HStack>
          <Input
            type="text"
            placeholder="Enter US zip"
            value={result}
            onChange={(event) => {
              setResult(event.target.value);
            }}
          />
          <IconButton
            aria-label="Search city button"
            icon={<FiSearch />}
            onClick={() => {
              setZip(result);
              onSubmit()
            }}
          ></IconButton>
        </HStack>
      </VStack>
    );
}