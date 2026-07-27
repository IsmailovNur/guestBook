import { type FC, memo } from 'react';
import { motion } from 'framer-motion';
import { Box, Card, CardContent, Typography } from '@mui/material';
import dayjs from 'dayjs';

interface MessageItemProps {
  author: string;
  message: string;
  datetime: string;
}

const MessageItem: FC<MessageItemProps> = memo((props) => {

  const {author, message, datetime} = props
  const formattedDate = dayjs(datetime).format('DD.MM.YYYY HH:mm');

  return (
    <motion.div
      initial={{opacity: 0, x: -20}}
      animate={{opacity: 1, x: 0}}
      style={{marginBottom: 12}}
    >
      <Card
        sx={{
          borderLeft: '4px solid #1976d2',
        }}
      >
        <CardContent sx={{'&:last-child': {paddingBottom: 2}}}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 1}}>
            <Typography variant="subtitle1" component="span" sx={{fontWeight: 'bold'}}>
              {author}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {formattedDate}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              wordBreak: 'break-word',
              whiteSpace: 'pre-wrap',
            }}
          >
            {message}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
});

export default MessageItem;