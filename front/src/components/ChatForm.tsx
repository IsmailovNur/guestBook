import React, { type FC, memo, useState } from 'react';
import { Card, CardContent, TextField, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface ChatFormProps {
  onSendMessage: (author: string, message: string) => Promise<void>;
}

const ChatForm: FC<ChatFormProps> = memo(({onSendMessage}) => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!author.trim() || !message.trim()) return;

    setIsSubmitting(true);
    try {
      await onSendMessage(author.trim(), message.trim());
      setMessage('');
      setAuthor('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card sx={{ marginBottom: 2.5, borderRadius: 3 }} variant="outlined">
      <CardContent>
        <Box
          component="form"
          onSubmit={submitHandler}
          sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}
        >
          <TextField
            size="small"
            label="Username"
            variant="outlined"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            disabled={isSubmitting}
            fullWidth
          />
          <Box sx={{ display: 'flex', gap: 1.2 }}>
            <TextField
              size="small"
              label="message..."
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting || !author.trim() || !message.trim()}
              endIcon={<SendIcon />}
              sx={{ minWidth: 100 }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
});

export default ChatForm;