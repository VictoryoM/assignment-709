import {
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Flex,
  Skeleton,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export function Achievement(props) {
  const { title, sub, description, image, institution, date, status } = props;
  const [loading, setLoading] = useState(true);
  return (
    <Center py={3}>
      <Flex
        direction={'column'}
        maxW={'395px'}
        // w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={2}
        // overflow={'hidden'}
      >
        {/* <Box
          h={{ base: '200px', lg: '215px' }}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        > */}
        <Skeleton isLoaded={!loading}>
          <img
            src={image}
            onLoad={() => setLoading(false)}
            // layout={'fill'}
            alt={'Achievement'}
          />
        </Skeleton>
        {/* </Box> */}
        <Stack p={3}>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'xs'}
            letterSpacing={1.1}
            // p={3}
          >
            {title}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'xl'}
            fontFamily={'body'}
          >
            {sub}
          </Heading>
          <Text color={'gray.500'} fontSize={'md'}>
            {description}
          </Text>
        </Stack>
        <Stack mt={4} direction={'row'} spacing={4} align={'center'} p={3}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{institution}</Text>
            <Text color={'gray.500'}>
              {date} · {status}
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Center>
  );
}
