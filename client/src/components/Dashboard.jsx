import { VStack, HStack, Spacer} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import WeatherCard from "./WeatherCard";
import SearchBar from "./SearchBar";
import {useDispatch, useSelector} from 'react-redux';


export default function Dashboard() {
  const state = useSelector(state => state);

  const { weather } = state;
  
  let weatherMap = new Map(Object.entries(state?.weather));

  let widgets = [];
  for (let i = 0; i < weatherMap.size; i++) {
    widgets.push(
      <>
        <WeatherCard key={i+1000000} />
        <Spacer key={i*i+9}/>
      </>
    );
  }

  return (
    <VStack>
      <SearchBar />
      <HStack>
        {widgets}
      </HStack>
    </VStack>
  );
  

}
