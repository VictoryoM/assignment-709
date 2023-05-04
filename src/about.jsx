import {
  Box,
  Code,
  Divider,
  Flex,
  Heading,
  Skeleton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { IdentityLeft, IdentityRight } from './components/Identity';
import { Link } from 'react-router-dom';

export default function About() {
  const [loading, setLoading] = useState(true);
  return (
    <Box
      fontSize={{ base: 'lg', md: 'xl' }}
      marginX={{ base: '3', md: '8' }}
      marginBottom={6}
    >
      <Flex
        direction={'column'}
        gap={8}
        textAlign="center"
        // marginX={{ base: '3', md: '8' }}
      >
        <Heading marginTop={5}>ABOUT</Heading>
        <Divider border={'1px'} />
        <Text>
          I'm a creator and self-trained artist living and working in New
          Zealand. As someone who values hard work, integrity, and respect above
          all else, I approach every challenge and interaction with honesty and
          transparency. I believe that building strong relationships and
          treating others with kindness is key to success in any field.
          <Link to="project">
            <Code fontSize={{ base: 'lg', md: 'xl' }}>Contact me</Code>
          </Link>
          or check out the other pages to getting to know more about me.
        </Text>
        <Box>
          <Flex gap={6} direction={{ base: 'column', xl: 'row' }}>
            <Skeleton
              isLoaded={!loading}
              w={{ base: '350px', md: '550px' }}
              alignSelf={'center'}
            >
              <img
                src="https://hellovictoryo.vercel.app/assets/img/profile-img.jpg"
                alt="Victoryo"
                onLoad={() => setLoading(false)}
              />
            </Skeleton>
            <Flex
              direction={'column'}
              gap={4}
              textAlign="left"
              alignItems={'start'}
            >
              <Text
                fontSize={'2xl'}
                fontWeight={'bold'}
                color={useColorModeValue('gray.600', 'whiteAlpha.700')}
              >
                UI/UX Designer & Fullstack Web Developer.
              </Text>
              <Text fontStyle={'italic'}>
                Hi there, Victoryo's here, please check out my details below.
                For more information, please contact me on the email address
                below.
              </Text>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: 0, md: 150, lg: 210 }}
              >
                <Box paddingRight={4}>
                  <IdentityLeft />
                </Box>
                {/* <Spacer /> */}
                <Box paddingRight={4}>
                  <IdentityRight />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Text textAlign={'start'}>
          As a proactive problem solver, I thrive in fast-paced environments and
          pay close attention to detail. I believe in delivering high-quality
          work that not only meets but exceeds my clients' expectations. When
          I'm not working, I love participating in hackathons and contributing
          to open source projects to enhance my skills and give back to the tech
          community.
        </Text>
      </Flex>
    </Box>
  );
}
