import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import monthly from '@/images/monthly.svg'
import shield from '@/images/shield.svg'
import subscription from '@/images/subscription.svg'


const data = [
    { id: 0, text: '30 days money back Guarantee', img: shield },
    { id: 1, text: 'No setup fees 100% hassle-free', img: monthly },
    { id: 2, text: 'No monthly subscription Pay once and for all', img: subscription },
]

const Bottom = () => {
    return (
        <Box display={'flex'} justifyContent={'center'} >
            <Flex flexWrap={{ base: 'wrap', md: 'nowrap' }} justifyContent={{ base: 'center', md: 'space-between' }} marginTop={10} borderRadius={15} width={{ base: '100%', md: '65%' }} >
                {data?.map((d) => {
                    return (
                        <Box marginBottom={{ base: 10, md: 0 }} paddingLeft={{ base: 2, md: 0 }} key={d.id} display={'flex'} alignItems={'center'} width={{ base: '95%', md: '30%' }} >
                            <Image src={d.img} height={25} width={25} alt={'ListItem'} />
                            <Text fontWeight={'bold'} fontSize={{ base: 'md', md: 'xl' }} marginLeft={5} >
                                {d.text}
                            </Text>
                        </Box>
                    )
                })}
            </Flex >
        </Box >
    )
}

export default Bottom