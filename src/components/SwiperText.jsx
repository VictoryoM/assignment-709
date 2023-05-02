import { Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Typed from 'react-typed';

const SwiperText = () => {
  const options = {
    strings: ['Designer', 'Developer', 'Freelancer', 'Hooper', 'Lover'],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
  };

  return (
    <Text fontSize="2xl" color={'white'}>
      I'm{' '}
      <Typed
        style={{ color: useColorModeValue('orange', 'blue') }}
        {...options}
      />
    </Text>
  );
};

export default SwiperText;
