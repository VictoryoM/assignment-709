import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export default function Project() {
  return (
    <Box
      fontSize={{ base: 'lg', md: 'xl' }}
      marginX={{ base: '3', md: '8' }}
      marginBottom={6}
    >
      <Flex direction={'column'} gap={8} textAlign="center">
        <Heading marginTop={5}>Projects</Heading>
        <Divider border={'1px'} />
      </Flex>
    </Box>
  );
}
