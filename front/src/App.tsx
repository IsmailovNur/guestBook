import { Box, Container, Typography } from '@mui/material';
import MessageList from "./components/MessageList.tsx";
import type { IMessage } from "./entities/Message/types.ts";
import { BASE_URL } from "./shared/axios/AxiosApi.ts";
import { useEffect, useState } from "react";

const App = () => {

  const [messages, setMessages] = useState<IMessage[]>([]);

  const fetchMessages = async () => {

    const response = await BASE_URL.get<IMessage[]>('/messages');

    setMessages(response.data);
  };

  useEffect(() => {
    void fetchMessages();
  }, []);

  return (
    <Box>
      <Container maxWidth="md" disableGutters>
        <Box sx={{textAlign: 'center', marginBottom: 3}}>
          <Typography variant="h3" sx={{m: 3}}>
            React-Guestbook
          </Typography>
          <Typography>
            MUI & Axios & Express
          </Typography>
        </Box>

        <MessageList messages={messages} />

      </Container>
    </Box>
  );
};

export default App;