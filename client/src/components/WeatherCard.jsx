import React from "react";
import {
  Box,
  Badge,
  Divider,
  Grid,
  GridItem,
  Text,
  Center,
  Flex,
  Spacer,
  Table,
  Tbody,
  Tr,
  Td,
  TableCaption,
  StackDivider,
  HStack,
  Stack,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
} from "@chakra-ui/react";
import {useDispatch, useSelector} from 'react-redux';
import {
  BsClouds,
  BsCloudRainHeavy,
  BsFillSunFill,
  BsFillCloudFog2Fill,
  BsCloudSnowFill,
  BsFillCloudDrizzleFill,
} from "react-icons/bs";
import { IoThunderstormOutline } from "react-icons/io5";

export default function WeatherCard() {

  const state = useSelector(state => state);
  const { weather } = state || {};
  const { city } = weather || {};
  const { timezone: offset } = city || {};
  const { daily } = weather || {};
  // console.log(daily)
  let weatherMap = new Map(Object.entries(state?.weather));
  let accordianItems = [];
  console.log(weather)

    weatherMap
      .forEach((value, key) => {
        let keyDate = key.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$2-$1");
        if ((new Date(key) !== "Invalid Date") && !isNaN(new Date(key))) {
          let date;
          daily
            .filter((e) => new Date(keyDate).toDateString() === new Date((e.dt + offset) * 1000).toDateString())
            .forEach((elem) => {
              date = new Date((elem.dt + offset) * 1000);
              const todayWeather = elem.weather[0].id;
              console.log(todayWeather.toString()[0])
              accordianItems.push(
                <>
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        pb={4}
                        w={[200, 300, 350, 400, 450, 500, 550]}
                        display="flex"
                        alignItems="stretch"
                      >
                        <Box
                          flex="2"
                          display="flex"
                          textAlign="left"
                          alignItems="stretch"
                          w={[200, 300, 350, 400, 450, 500, 550]}
                        >
                          {date?.toDateString()}
                        </Box>
                        <Spacer />
                        <Box>
                          {(() => {
                            if (todayWeather.toString()[0] === "2") return <IoThunderstormOutline/>;
                            if (todayWeather.toString()[0] === "3") return <BsFillCloudDrizzleFill/>;
                            if (todayWeather.toString()[0] === "5") return <BsCloudRainHeavy/>;
                            if (todayWeather.toString()[0] === "6") return <BsCloudSnowFill/>;
                            if (todayWeather.toString()[0] === "7") return <BsFillCloudFog2Fill/>;
                            if (todayWeather.toString() === "800") return <BsFillSunFill/>;
                            if (todayWeather.toString()[0] === "8") return <BsClouds/>;
                          })()}
                        </Box>
                        <Spacer />
                        <Box textAlign="right" alignItems="stretch">
                          {" "}
                          {Math.ceil(elem.temp.max - 273.15)}&deg;C/
                          {Math.floor(elem.temp.min - 273.15)}&deg;C
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} display="flex" alignItems="stretch">
                      <Table variant="simple" alignItems="stretch">
                        <Tbody>
                          <Tr>
                            <Td>UV Index</Td>
                            <Td textAlign="right">{elem.uvi}</Td>
                          </Tr>

                          <Tr>
                            <Td>Feels like</Td>
                            <Td textAlign="right"></Td>
                          </Tr>
                          <Tr>
                            <Td>Wind speed (mph)</Td>
                            <Td textAlign="right">{elem.wind_speed + " "}</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </AccordionPanel>
                  </AccordionItem>
                </>
              );
            });
        } 
      });

  return (
    <Flex width={[200, 300, 400, 500, 700]} alignItems="stretch">
      {weather && (
        <>
          <SimpleGrid>
            <Box
              display="flex"
              divider={<StackDivider />}
              borderColor="gray.100"
              borderWidth="2px"
              p="4"
              borderRadius="lg"
              w="100%"
              width={[200, 300, 400, 500, 700]}
              // width="700px"
              maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
              alignItems="stretch"
            >
              <Accordion defaultIndex={[0]} allowMultiple>
                {accordianItems}
              </Accordion>
            </Box>
          </SimpleGrid>
        </>
      )}
    </Flex>
  );

}

