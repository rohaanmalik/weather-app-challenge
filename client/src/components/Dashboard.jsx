import { VStack, HStack, Spacer} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import WeatherCard from "./WeatherCard";
import SearchBar from "./SearchBar";
import { getWeatherAsync } from "../redux/slices/weatherSlices";


export default function Dashboard() {
  const [zip, setZip] = useState("37934");
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getWeatherAsync({ zip: "37934" }));
  }, []);

  
  //select state from store
  const state = useSelector(state => state);
  const { weather, loading, error } = state;
  console.log(state);
  console.log("HIII")

  return (
    <VStack>
      <SearchBar/>
      <HStack>
      <WeatherCard/>
      <Spacer/>
      <WeatherCard/>
      <Spacer/>
      <WeatherCard/>
      <Spacer/>
      <WeatherCard/>
      <Spacer/>
      <WeatherCard/>
      </HStack>
    </VStack>
  );
}
