import { Box, Button, Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import check from '@/images/check.svg'

const data = [
    { id: 0, text: 'International calling and messaging API' },
    { id: 1, text: 'Additional phone numbers' },
    { id: 2, text: 'Automated messages via Zapier' },
    { id: 3, text: '24/7 support and consulting' },
]

const Bottom = () => {
    return (
        <Box display={'flex'} justifyContent={'center'} >
            <Flex boxShadow={'lg'} flexWrap={{ base: 'wrap', md: 'nowrap' }} background={'#ffffff'} borderRadius={15} height={{ base: 'auto', md: '336px' }} width={{ base: '95%', md: '85%', lg: '65%' }} >

                <Box borderTopLeftRadius={15} borderBottomLeftRadius={{ base: 0, md: 15 }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} backgroundColor={'rgba(101, 44, 211, 0.3)'} width={{ base: '100%', md: '40%' }}>
                    <Heading fontSize={'3xl'} paddingTop={5} >Premium PRO</Heading>
                    <Heading fontSize={'5xl'} paddingTop={5}>$329</Heading>
                    <Text paddingTop={5}>billed just once</Text>
                    <Button width={'80%'} color={'white'} marginTop={5} marginBottom={5} backgroundColor={'rgba(128, 90, 213, 1)'} _hover={{ backgroundColor: 'rgba(128, 90, 213, 0.7)' }} >Get Started</Button>
                </Box>

                <Box paddingBottom={{ base: 5, md: 0 }} borderRadius={15} display={'flex'} flexDirection={'column'} justifyContent={'center'} paddingLeft={5} backgroundColor={'#ffffff'} width={{ base: '100%', md: '70%' }}>

                    <Text paddingTop={5}>Access these features when you get this pricing package for your business.</Text>

                    <UnorderedList margin={0} >
                        {data?.map((d) => {
                            return (
                                <ListItem marginTop={5} display={'flex'} alignItems={'center'}  >
                                    <Image src={check} height={20} width={20} alt={'ListItem'} />
                                    <Text marginLeft={2} >
                                        {d.text}
                                    </Text>
                                </ListItem>
                            )
                        })}
                    </UnorderedList>
                </Box>
            </Flex>
        </Box>
    )
}

export default Bottom