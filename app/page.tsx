"use client"
import ChakraWrapper from "@/component/ChakraWrapper";
import { Box } from "@chakra-ui/react";
import Bottom from "./Bottom";
import Center from "./Center";
import Top from "./Top";

export default function Home() {
  return (

    <ChakraWrapper>
      <Box height={'100vh'} >
        <Top />
        <Box position={'absolute'} top={{base:250,md:150}} width={'100%'} >

          <Center />
          <Bottom />
        </Box>
      </Box>
    </ChakraWrapper>
  )
}
