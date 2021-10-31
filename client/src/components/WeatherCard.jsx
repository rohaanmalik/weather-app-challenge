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
} from "@chakra-ui/react";


export default function WeatherCard() {

   return (
     <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
       <Center h="100px" fontSize="3xl" align="center">
         {" "}
         4 degrees{" "}
       </Center>
       <Flex>
         <Text textAlign="center">Sent</Text>
         <Spacer />
         <Text textAlign="left">345,670</Text>
       </Flex>
     </Box>
   );
}