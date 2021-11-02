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
} from "@chakra-ui/react";
import {useDispatch, useSelector} from 'react-redux';

export default function WeatherCard() {

  const state = useSelector(state => state);
  const { weather } = state;
  const { city } = weather;
  const {timezone: offset} = city;
  console.log(offset)
  let weatherMap = new Map(Object.entries(state?.weather));
  let accordianItems = [];
  console.log(
    weatherMap
      .forEach((value, key) => {
        if ((new Date(key) !== "Invalid Date") && !isNaN(new Date(key))) {
          let date;
          value.forEach((elem) => {
            date = new Date((elem.dt+offset) * 1000)
            console.log(date.toDateString())
          });
          accordianItems.push(
            <>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {date.toDateString()}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Table variant="simple">
                    <Tbody>
                      <Tr>
                        <Td>Temperature</Td>
                        <Td textAlign="right"></Td>
                      </Tr>
                      <Tr>
                        <Td>Feels like</Td>
                        <Td textAlign="right">
                          {/* {data.getCityByName.weather.summary.description} */}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Wind speed (mph)</Td>
                        <Td textAlign="right">
                          {/* {data.getCityByName.weather.wind.speed + " "} */}
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </AccordionPanel>
              </AccordionItem>
            </>
          );
        } 
      })
  );

  return (
    <Stack>
      <Divider mt="4" mb="4" borderColor="gray.100" />
      {weather && (
        <>
          <Box
            display="flex"
            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth="2px"
            p="4"
            borderRadius="lg"
            w="100%"
            maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
            alignItems="stretch"
          >
            <Accordion defaultIndex={[0]} allowMultiple>
              {accordianItems}
            </Accordion>
          </Box>
        </>
      )}
    </Stack>
  );

  //  return (
  //    <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
  //      <Center h="100px" fontSize="3xl" align="center">
  //        {" "}
  //        4 degrees{" "}
  //      </Center>
  //      <Flex>
  //        <Text textAlign="center">Sent</Text>
  //        <Spacer />
  //        <Text textAlign="left">345,670</Text>
  //      </Flex>
  //    </Box>
  //  );
}

