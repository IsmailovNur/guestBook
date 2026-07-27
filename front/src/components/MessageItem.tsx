import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import type { IMessage } from '../entities/Message/types';

interface Props {
  message: IMessage;
}

export const MessageItem: React.FC<Props> = ({message}) => {

  return (
    <Card sx={{marginBottom: 2, borderRadius: 2}} variant="outlined">
      <CardContent>
        <Typography color="primary" sx={{fontWeight: 'bold'}}>
          {message.author}
        </Typography>
        <Typography color="text.secondary">
          {new Date(message.datetime).toLocaleString()}
        </Typography>
        <Typography>
          {message.message}
        </Typography>

        <Box sx={{
          Width: 300,
          Height: 300,
          borderRadius: 1
        }}>
        </Box>
      </CardContent>
    </Card>
  );
};