import React, { type ChangeEvent, useState } from 'react';
import { Box, Button, Card, CardContent, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import type { IMessageMutation } from '../entities/Message/types';

interface ChatFormProps {
  onSubmit: (data: IMessageMutation) => void;
  isLoading: boolean;
}

export const ChatForm: React.FC<ChatFormProps> = ({onSubmit, isLoading}) => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImage(e.target.files[0]);
  };

  const submitHandler = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    onSubmit({author, message, image});
    setAuthor('');
    setMessage('');
    setImage(null);
  };

  return (
    <Card sx={{marginBottom: 3, borderRadius: 3}} variant="outlined">
      <CardContent>
        <Box
          component="form"
          onSubmit={submitHandler}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
          <TextField
            label="Author (optional)"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            disabled={isLoading}
          />
          <TextField
            label="Message"
            required
            multiline
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isLoading}
          />
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Button component="label" variant="outlined" startIcon={
              <CloudUploadIcon />}>
              {image ? image.name : 'Load Image'}
              <input type="file" hidden onChange={fileChangeHandler} />
            </Button>
            <Button type="submit" variant="contained" disabled={isLoading || !message.trim()} endIcon={
              <SendIcon />}>
              Send
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};