import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Top = () => {
    return (
        <Box paddingLeft={{base:5,md:0}} display={'flex'} flexDirection={'column'} alignItems={'center'} background={'#6B46C1'} height={'50%'}  >
            <Heading color={'#ffffff'} paddingTop={10} paddingBottom={5}>Simple pricing for your business</Heading>
            <Text fontSize={'xl'} color={'#ffffff'}>Plans that are carefully crafted to suit your business.</Text>
        </Box>
    )
}

export default Top