import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const ChakraWrapper = ({ children }:any) => {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}

export default ChakraWrapper