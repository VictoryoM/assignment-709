import {
  Box,
  Code,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export const IdentityLeft = () => {
  const theValueLeft = [
    {
      name: 'Birthday',
      value: '16 December 2001',
    },
    {
      name: 'Website',
      value: 'victoryo.site',
    },
    {
      name: 'Phone',
      value: '02108123456',
    },
    {
      name: 'City',
      value: 'Invercargill, New Zealand',
    },
  ];
  return (
    <Flex direction={'column'}>
      {theValueLeft.map(item => (
        <Box key={item.name} fontSize={{ base: 'lg', md: 'xl' }}>
          {item.name === 'Website' ? (
            <Box>
              <Text fontWeight={'bold'}>{item.name}</Text> <Spacer />
              <Link to="https://victoryo.site">
                <Code fontSize={{ base: 'lg', md: 'xl' }} fontStyle={'italic'}>
                  {item.value}
                </Code>
              </Link>
            </Box>
          ) : (
            <Box>
              <Text fontWeight={'bold'}>{item.name}</Text> <Spacer />
              <Text fontStyle={'italic'}>{item.value}</Text>
            </Box>
          )}
        </Box>
      ))}
    </Flex>
  );
};

export const IdentityRight = () => {
  const theValueRight = [
    {
      name: 'Age',
      value: '21',
    },
    {
      name: 'Degree',
      value: 'Bachelor',
    },
    {
      name: 'Email',
      value: 'hello@itis.me',
    },
    {
      name: 'Freelance',
      value: 'Available',
    },
  ];
  return (
    <Flex direction={'column'}>
      {theValueRight.map(item => (
        <Box key={item.name} fontSize={{ base: 'lg', md: 'xl' }}>
          {item.name === 'Website' ? (
            <Box>
              <Text fontWeight={'bold'}>{item.name}</Text> <Spacer />
              <Link to="https://victoryo.site">
                <Code fontSize={{ base: 'lg', md: 'xl' }} fontStyle={'italic'}>
                  {item.value}
                </Code>
              </Link>
            </Box>
          ) : (
            <Box>
              <Text fontWeight={'bold'}>{item.name}</Text> <Spacer />
              <Text fontStyle={'italic'}>{item.value}</Text>
            </Box>
          )}
        </Box>
      ))}
    </Flex>
  );
};
