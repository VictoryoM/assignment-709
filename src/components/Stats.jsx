import {
  Flex,
  Spacer,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Box,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export function StatsLeft() {
  const status = [
    { skill: 'HTML', percentage: '100' },
    { skill: 'Typescript', percentage: '69' },
    { skill: 'Javascript', percentage: '55' },
  ];
  return (
    <Box>
      {status.map((items, index) => {
        return (
          <Box
            fontSize={'md'}
            fontFamily={'monospace'}
            fontStyle={'italic'}
            key={index}
          >
            <Flex>
              <Box p="4">
                <Text>{items.skill}</Text>
              </Box>
              <Spacer />
              <Box p="4">{items.percentage}%</Box>
            </Flex>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={items.percentage}
              isReadOnly
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
            </Slider>
          </Box>
        );
      })}
    </Box>
  );
}
export function StatsRight() {
  const status = [
    { skill: 'Networking', percentage: '100' },
    { skill: 'Github', percentage: '92' },
    { skill: 'Figma', percentage: '90' },
  ];
  return (
    <Box>
      {status.map((items, index) => {
        return (
          <Box
            fontSize={'md'}
            fontFamily={'monospace'}
            fontStyle={'italic'}
            key={index}
          >
            <Flex>
              <Box p="4">
                <Text>{items.skill}</Text>
              </Box>
              <Spacer />
              <Box p="4">{items.percentage}%</Box>
            </Flex>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={items.percentage}
              isReadOnly
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
            </Slider>
          </Box>
        );
      })}
    </Box>
  );
}
