import { Box, Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import Navbar from './components/Navbar';

export default function About() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Navbar />
      <Grid minH="100vh" p={3} paddingLeft={{ base: 'none', md: '27vh' }}>
        <Heading>Hello</Heading>
      </Grid>
    </Box>
  );
}
