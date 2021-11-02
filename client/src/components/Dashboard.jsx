import { VStack, HStack, Spacer} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import WeatherCard from "./WeatherCard";
import SearchBar from "./SearchBar";
import {useDispatch, useSelector} from 'react-redux';


export default function Dashboard() {
  const state = useSelector(state => state);

  const { weather } = state;
  
  let weatherMap = new Map(Object.entries(state?.weather));
  // console.log(weatherMap)

  return (
    <VStack>
      <SearchBar />
      <HStack>
        <WeatherCard  />
        <Spacer />
      </HStack>
    </VStack>
  );
  

}
