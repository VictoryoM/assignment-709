import {
  Box,
  Center,
  Code,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Skeleton,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { IdentityLeft, IdentityRight } from './components/Identity';
import { Link } from 'react-router-dom';

export default function About() {
  const [loading, setLoading] = useState(true);
  return (
    <Box fontSize="xl">
      {/* <Navbar /> */}
      <Grid
        p={3}
        h="200px"
        templateRows="repeat(8, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={8}
        minH={{ base: '91.25vh', md: '100vh' }}
        marginX={8}
      >
        <GridItem colSpan={3} alignSelf={'center'} textAlign="center">
          <Center>
            <Box minW={60}>
              <Heading marginBottom={4}>ABOUT</Heading>
              <Divider color={'blue.300'} border={'2px'} />
            </Box>
          </Center>
        </GridItem>

        <GridItem colSpan={3} textAlign="center">
          <Text fontSize={{ base: 'xs', md: 'lg', sm: 'sm', lg: 'xl' }}>
            I'm a creator and self-trained artist living and working in New
            Zealand. As someone who values hard work, integrity, and respect
            above all else, I approach every challenge and interaction with
            honesty and transparency. I believe that building strong
            relationships and treating others with kindness is key to success in
            any field.
            <Link to="project">
              <Code>Contact me</Code>
            </Link>
            or check out the other pages to getting to know more about me.
          </Text>
        </GridItem>
        <GridItem rowSpan={4} colSpan={1}>
          <img
            src="https://hellovictoryo.vercel.app/assets/img/profile-img.jpg"
            alt="Victoryo"
            onLoad={() => setLoading(false)}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Text
            fontSize={{ base: 'xs', md: 'lg', sm: 'sm', lg: '2xl' }}
            fontWeight={'bold'}
            color={'whiteAlpha.700'}
          >
            UI/UX Designer & Fullstack Web Developer.
          </Text>
          <Text fontStyle={'italic'}>
            Hi there, my name is Victoryo, please check out my details below.
            For more information, please contact me on the email address below.
          </Text>
        </GridItem>
        <GridItem colSpan={1} rowSpan={3}>
          <IdentityLeft />
        </GridItem>
        <GridItem colSpan={1} rowSpan={3}>
          <IdentityRight />
        </GridItem>
        <GridItem colSpan={3}>
          <Text fontSize={{ base: 'xs', md: 'lg', sm: 'sm', lg: 'xl' }}>
            As a proactive problem solver, I thrive in fast-paced environments
            and pay close attention to detail. I believe in delivering
            high-quality work that not only meets but exceeds my clients'
            expectations. When I'm not working, I love participating in
            hackathons and contributing to open source projects to enhance my
            skills and give back to the tech community.
          </Text>
        </GridItem>
        {/* <GridItem colSpan={3} bg="tomato"></GridItem> */}
      </Grid>
    </Box>
  );
}
