import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  Button,
  Flex,
  Square,
  Center,
  Spinner,
  useColorModeValue,
} from '@chakra-ui/react';
import SwiperText from './components/SwiperText';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://images.wallpapersden.com/image/download/a-dragon-valley-art_bmVnZ2aUmZqaraWkpJRobWllrWdpZWU.jpg',
      {
        headers: {
          'Content-Type': 'image/jpeg',
          cors: 'no-cors',
        },
      }
    ).then(response => {
      if (response.ok) {
        setLoading(false);
      }
    });
  }, []);
  console.log(loading);

  return (
    <Box>
      <Box
        textAlign="center"
        fontSize="xl"
        opacity={0.7}
        bgImage={'https://hellovictoryo.vercel.app//assets/img/hero-bg.jpg'}
        bgSize={'cover'}
        // display={loading ? 'none' : 'block'}
        onLoad={() => {
          console.log('loaded');
        }}
      >
        <Grid minH="100vh">
          <Flex color="white" alignSelf={'center'}>
            <Center w={'15%'}></Center>
            <Flex direction={'column'} alignItems="start">
              <Text fontSize="7xl" fontWeight="bold" color="white">
                Victoryo
              </Text>
              <SwiperText />
              <Link marginTop={4} marginBottom={4} href="/project">
                <Code fontSize="xl">See My Projects</Code>
              </Link>
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
    </Box>
  );
}

export default App;
