import { type FC, memo } from 'react';
import type { IMessage } from "../entities/Message/types.ts";
import { MessageItem } from "./MessageItem.tsx";
import { Typography } from "@mui/material";

interface MessageListProps {
  messages: IMessage[];
}

const MessageList: FC<MessageListProps> = memo(({messages}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column-reverse',
    }}>
      {
        messages.length
          ? messages.map((msg) => <MessageItem key={msg.id} message={msg} />)
          :
          <Typography variant="h4" sx={{m: 3, textAlign: "center"}}>
            No Messages!
          </Typography>
      }
    </div>
  );
});

export default MessageList;