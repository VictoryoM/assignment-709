import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import SwiperText from './components/SwiperText';

function App() {
  return (
    <Box
      textAlign="center"
      fontSize="xl"
      bgColor={'rgba(0, 0, 0, 0.8)'}
      bgImage={'https://hello.victoryo.site/assets/img/hero-bg.jpg'}
      bgSize={'cover'}
    >
      {/* <Navbar /> */}
      <Grid minH="100vh">
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
          <SwiperText />
        </VStack>
      </Grid>
    </Box>
  );
}

export default App;
