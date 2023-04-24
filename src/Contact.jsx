import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export const Contact = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const submitHandler = () => {
    if (!nameValue || !emailValue || !messageValue) {
      console.log('Something is empty');
      return;
    }

    var discordMessage = {
      username: 'Lecture 6 Bot',
      content: '2000 characters...',
      embeds: [
        {
          fields: [
            { name: 'Name', value: nameValue },
            { name: 'Email', value: emailValue },
            { name: 'Message', value: messageValue },
          ],
        },
      ],
    };
    
    fetch(process.env.REACT_APP_WEBHOOK_URL, {
      body: JSON.stringify(discordMessage),
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Name:</FormLabel>
        <Input
          onChange={e => {
            setNameValue(e.target.value);
          }}
          type={'text'}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email:</FormLabel>
        <Input
          onChange={e => {
            setEmailValue(e.target.value);
          }}
          type={'email'}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Message:</FormLabel>
        <Textarea
          onChange={e => {
            setMessageValue(e.target.value);
          }}
        />
      </FormControl>
      <Button onClick={submitHandler}>Submit</Button>
    </Box>
  );
};
