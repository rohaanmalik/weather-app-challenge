import { HStack, Spacer, Spinner, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from 'react-redux';
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";


export default function Dashboard() {
  const state = useSelector(state => state);

  const { weather, loading, error } = state || {};
  
  let weatherMap = new Map(Object.entries(state?.weather));
  // console.log(weatherMap)
  console.log(state)

  return (
    <VStack>
      <SearchBar />{" "}
      {loading && <Spinner/> }
      {(weather.length !== 0 && !loading ) && (
        <HStack>
          <WeatherCard />
          <Spacer />
        </HStack>
      )}
    </VStack>
  );
  

}
