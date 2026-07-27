import { type FC, memo } from 'react';
import type { IMessage } from "../entities/Message/types.ts";
import { MessageItem } from "./MessageItem.tsx";

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
        messages.map((msg) => <MessageItem key={msg.id} message={msg} />)
      }
    </div>
  );
});

export default MessageList;