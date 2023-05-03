import { Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const SwiperText = () => {
  const options = {
    sequence: [
      ' Designer',
      1000,
      ' Developer',
      1000,
      ' Freelancer',
      1000,
      ' Hooper',
      1000,
      ' Lover',
      1000,
    ],
    speed: 30,
  };

  return (
    <Text fontSize="2xl" color={'white'}>
      I'm
      <TypeAnimation
        repeat={Infinity}
        style={{ color: useColorModeValue('orange', 'blue') }}
        {...options}
      />
    </Text>
  );
};

export default SwiperText;
