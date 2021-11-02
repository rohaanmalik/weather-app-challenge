import { VStack, HStack, Spacer, Spinner} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import WeatherCard from "./WeatherCard";
import SearchBar from "./SearchBar";
import {useDispatch, useSelector} from 'react-redux';


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
