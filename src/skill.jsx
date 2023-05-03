import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AchievementRight } from './components/Achievement';
import { StatsLeft, StatsRight } from './components/Stats';

export default function Skill() {
  return (
    <Box
      fontSize={{ base: 'lg', md: 'xl' }}
      marginX={{ base: '3', md: '8' }}
      marginBottom={6}
    >
      <Flex direction={'column'} gap={8} textAlign="center">
        <Heading marginTop={5}>Skills</Heading>
        <Divider border={'1px'} />
        <Tabs position="relative" variant="unstyled" align={'center'}>
          <TabList>
            <Tab>All</Tab>
            <Tab>Skill</Tab>
            <Tab>Achievement</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <Flex direction={'column'} gap={5} textAlign={'start'}>
                <Text fontSize={'lg'} fontWeight={'bold'}>
                  Skills stats
                </Text>
                <Flex
                  direction={{ base: 'column', lg: 'row' }}
                  gap={{ base: 0, md: 150, lg: 210 }}
                >
                  <Box paddingRight={4} minW={{ base: 200, lg: 680 }}>
                    <StatsLeft />
                  </Box>
                  <Box paddingRight={4} minW={{ base: 200, lg: 680 }}>
                    <StatsRight />
                  </Box>
                </Flex>
                <Text fontSize={'lg'} fontWeight={'bold'}>
                  Achievement
                </Text>
                <Flex
                  direction={{ base: 'column', lg: 'row' }}
                  gap={{ base: 0, md: 150, lg: 210 }}
                >
                  <Box paddingRight={4} minW={{ base: 200, lg: 680 }}>
                    <AchievementRight />
                  </Box>
                  <Box paddingRight={4} minW={{ base: 200, lg: 680 }}>
                    <StatsRight />
                  </Box>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex direction={'column'} gap={5} textAlign={'start'}>
                <Text fontSize={'lg'} fontWeight={'bold'}>
                  Skills stats
                </Text>
                <Text fontStyle={'italic'} fontSize={'md'}>
                  Stats below is based on data I've gathered from people around
                  me. Don't hesitate to ask me for more information.
                </Text>
                <Flex
                  direction={{ base: 'column', lg: 'row' }}
                  gap={{ base: 0, md: 150, lg: 210 }}
                >
                  <Box paddingRight={4} minW={680}>
                    <StatsLeft />
                  </Box>
                  <Box paddingRight={4} minW={680}>
                    <StatsRight />
                  </Box>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
}
