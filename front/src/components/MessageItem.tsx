import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import type { IMessage } from '../entities/Message/types';
import { API_URL } from "../shared/axios/AxiosApi.ts";

interface MessageItemProps {
  message: IMessage;
}

export const MessageItem: React.FC<MessageItemProps> = ({message}) => {
  const imageUrl = message.image
    ? `${API_URL}/public/images/${message.image}`
    : null;

  console.log(imageUrl);

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

        {imageUrl && (
          <Box sx={{
            borderRadius: 1,
            display: 'flex',
            justifyContent: 'center',
          }}>
            <CardMedia
              component="img"
              image={imageUrl}
              alt="Uploaded image"
              sx={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: 2
              }}
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};