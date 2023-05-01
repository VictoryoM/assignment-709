import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Navbar />
      <Grid minH="100vh" p={3} paddingLeft={{ base: 'none', md: '27vh' }}>
        <VStack spacing={8}>
          <Text>
            Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  );
}

export default App;
