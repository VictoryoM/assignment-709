import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
    <Box>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input onChange={e => setName(e.target.value)} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input onChange={e => setEmail(e.target.value)} type="email" />
      </FormControl>
      <FormControl>
        <FormLabel>Messages</FormLabel>
        <Input onChange={e => setMessage(e.target.value)} type="text" />
        <FormHelperText>We'll never share your credential.</FormHelperText>
      </FormControl>
      <Button colorScheme="teal" variant="solid" onClick={handleSubmit}>
        Button
      </Button>
    </Box>
  );
}
