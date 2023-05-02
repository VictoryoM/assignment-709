import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Textarea,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import Socials from './components/SocialButton';
import theImage from './components/hero-bg.jpg';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      alert('Please fill all the fields');
      return;
    }

    var discordMessage = {
      username: 'Lecture 6 Bot',
      content: 'Hello Guysss :wave: :smile: :wave:',
      embeds: [
        {
          fields: [
            { name: 'Company Name', value: companyName },
            { name: 'Name', value: name },
            { name: 'Email', value: email },
            { name: 'Message', value: message },
          ],
        },
      ],
    };
    fetch(process.env.REACT_APP_WEBHOOK_URL, {
      body: JSON.stringify(discordMessage),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      bgImage={theImage}
      bgSize={'cover'}
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue(
          'rgba(251, 251, 242, 0.8)',
          'rgba(86, 82, 84, 0.8)'
        )}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
        backdropFilter="saturate(180%) blur(5px)"
      >
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Contact Me
          </Heading>
        </Center>
        <Center>
          <Flex direction={'column'} alignItems={'center'}>
            <Avatar
              size="2xl"
              src="https://hellovictoryo.vercel.app/assets/img/profile-img.jpg"
            ></Avatar>
            <Socials />
          </Flex>
        </Center>
        <FormControl id="userName" isRequired>
          <FormLabel>Company Name</FormLabel>
          <Input
            placeholder="Your Company"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={e => setCompanyName(e.target.value)}
          />
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Name"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            onChange={e => setEmail(e.target.value)}
            placeholder="email@email.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Messages</FormLabel>
          <Textarea
            onChange={e => setMessage(e.target.value)}
            placeholder="Message"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            minH={100}
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
