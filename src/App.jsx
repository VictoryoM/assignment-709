import React from 'react';
import {
  Box,
  Text,
  Code,
  Grid,
  Button,
  Flex,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import SwiperText from './components/SwiperText';
import { Link, useNavigate } from 'react-router-dom';
import theImage from './components/hero-bg.jpg';

function App() {
  const navigate = useNavigate();

  return (
    <Box
      textAlign="center"
      fontSize="xl"
      opacity={useColorModeValue('0.8', '0.5')}
      bgImage={theImage}
      bgSize={'cover'}
    >
      <Grid minH={{ base: '91.25vh', md: '100vh' }}>
        <Flex color="white" alignSelf={'center'}>
          <Center w={'15%'}></Center>
          <Flex direction={'column'} alignItems="start">
            <Text fontSize="7xl" fontWeight="bold" color="white">
              Victoryo
            </Text>
            <SwiperText />
            <Box marginTop={4} marginBottom={4}>
              <Link to="project">
                <Code fontSize="xl">See My Projects</Code>
              </Link>
            </Box>
            <Button
              onClick={() => navigate('/about')}
              bg={'cyan'}
              color={useColorModeValue('black', 'white')}
            >
              More Me
            </Button>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  );
}

export default App;
