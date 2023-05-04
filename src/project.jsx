import {
  Box,
  Divider,
  chakra,
  Flex,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import React from 'react';
import { Achievement } from './components/Achievement';
import { Achieves } from './components/achieves';
import theImage from './components/project.png';
import { Link } from 'react-router-dom';

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Project() {
  return (
    <Box
      fontSize={{ base: 'lg', md: 'xl' }}
      marginX={{ base: '3', md: '8' }}
      marginBottom={6}
    >
      <Flex direction={'column'} gap={8} textAlign="center">
        <Heading marginTop={5}>Projects</Heading>
        <Divider border={'1px'} />
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1
            textAlign={'center'}
            fontSize={'4xl'}
            py={10}
            fontWeight={'bold'}
          >
            Gained knowledge from the project, more in the future.
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard
              title={'Projects'}
              stat={'5'}
              icon={<BsPerson size={'3em'} />}
            />
            <StatsCard
              title={'Languages'}
              stat={'6'}
              icon={<FiServer size={'3em'} />}
            />
            <StatsCard
              title={'Frameworks'}
              stat={'5'}
              icon={<GoLocation size={'3em'} />}
            />
          </SimpleGrid>
        </Box>
        <Box textAlign={'start'}>
          <Achievement
            title={'React'}
            sub={'Portfolio'}
            description={Achieves[0].description}
            image={theImage}
            institution={
              <Link to={'/'}>
                <Button
                  size={'sm'}
                  mb={4}
                  variant={'solid'}
                  // border={'1px'}
                  color={'green.500'}
                >
                  Click here
                </Button>
              </Link>
            }
            date={'April 2023'}
            status={'Finished'}
          />
        </Box>
      </Flex>
    </Box>
  );
}
