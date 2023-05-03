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
        <Tabs position="relative" variant="unstyled">
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
                <Text fontSize={'lg'}>Skills stats</Text>
                <Box
                  fontSize={'md'}
                  fontFamily={'monospace'}
                  fontStyle={'italic'}
                >
                  <Flex>
                    <Box p="4">
                      <Text>HTML</Text>
                    </Box>
                    <Spacer />
                    <Box p="4">80 %</Box>
                  </Flex>
                  <Slider aria-label="slider-ex-1" defaultValue={80} isReadOnly>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                  </Slider>
                </Box>
              </Flex>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
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
