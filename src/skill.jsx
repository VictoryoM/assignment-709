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
import { Achievement } from './components/Achievement';
import { StatsLeft, StatsRight } from './components/Stats';
import { Achieves } from './components/achieves';

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
                <Text fontStyle={'italic'} fontSize={'md'}>
                  Stats below is based on data I've gathered from people around
                  me. Don't hesitate to ask me for more information.
                </Text>
                <Flex
                  direction={{ base: 'column', lg: 'row' }}
                  // gap={{ base: 0, lg: 210 }}
                >
                  <Spacer />
                  <Box paddingRight={4} minW={{ base: 200, lg: 380, xl: 500 }}>
                    <StatsLeft />
                  </Box>
                  <Spacer />
                  <Box paddingRight={4} minW={{ base: 200, lg: 380, xl: 500 }}>
                    <StatsRight />
                  </Box>
                  <Spacer />
                </Flex>
                <Text fontSize={'lg'} fontWeight={'bold'}>
                  Achievement
                </Text>
                <Flex direction={{ base: 'column', lg: 'row' }}>
                  <Box paddingRight={4}>
                    <Achievement
                      title={Achieves[0].title}
                      sub={Achieves[0].sub}
                      description={Achieves[0].description}
                      image={Achieves[0].image}
                      institution={Achieves[0].institution}
                      date={Achieves[0].date}
                      status={Achieves[0].status}
                    />
                  </Box>
                  <Spacer />
                  <Box paddingRight={4}>
                    <Achievement
                      title={Achieves[1].title}
                      sub={Achieves[1].sub}
                      description={Achieves[1].description}
                      image={Achieves[1].image}
                      institution={Achieves[1].institution}
                      date={Achieves[1].date}
                      status={Achieves[1].status}
                    />
                  </Box>
                  <Spacer />
                  <Box paddingRight={4}>
                    <Achievement
                      title={Achieves[2].title}
                      sub={Achieves[2].sub}
                      description={Achieves[2].description}
                      image={Achieves[2].image}
                      institution={Achieves[2].institution}
                      date={Achieves[2].date}
                      status={Achieves[2].status}
                    />
                  </Box>
                  {/* <Box paddingRight={4} minW={{ base: 200, lg: 580 }}>
                  </Box>
                  <Box paddingRight={4} minW={{ base: 200, lg: 580 }}>
                    <StatsRight />
                  </Box> */}
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
                  // gap={{ base: 0, lg: 210 }}
                >
                  <Spacer />
                  <Box paddingRight={4} minW={{ base: 200, lg: 380, xl: 500 }}>
                    <StatsLeft />
                  </Box>
                  <Spacer />
                  <Box paddingRight={4} minW={{ base: 200, lg: 380, xl: 500 }}>
                    <StatsRight />
                  </Box>
                  <Spacer />
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex direction={'column'} gap={5} textAlign={'start'}>
                <Text fontSize={'lg'} fontWeight={'bold'}>
                  Achievement
                </Text>
                <Flex direction={{ base: 'column', lg: 'row' }}>
                  <Box paddingRight={4}>
                    <Achievement
                      title={Achieves[0].title}
                      sub={Achieves[0].sub}
                      description={Achieves[0].description}
                      image={Achieves[0].image}
                      institution={Achieves[0].institution}
                      date={Achieves[0].date}
                      status={Achieves[0].status}
                    />
                  </Box>
                  <Spacer />
                  <Box paddingRight={4}>
                    <Achievement
                      title={Achieves[1].title}
                      sub={Achieves[1].sub}
                      description={Achieves[1].description}
                      image={Achieves[1].image}
                      institution={Achieves[1].institution}
                      date={Achieves[1].date}
                      status={Achieves[1].status}
                    />
                  </Box>
                  <Spacer />
                  <Box paddingRight={4}>
                    <Achievement
                      title={Achieves[2].title}
                      sub={Achieves[2].sub}
                      description={Achieves[2].description}
                      image={Achieves[2].image}
                      institution={Achieves[2].institution}
                      date={Achieves[2].date}
                      status={Achieves[2].status}
                    />
                  </Box>
                  {/* <Box paddingRight={4} minW={{ base: 200, lg: 580 }}>
                  </Box>
                  <Box paddingRight={4} minW={{ base: 200, lg: 580 }}>
                    <StatsRight />
                  </Box> */}
                </Flex>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
}
