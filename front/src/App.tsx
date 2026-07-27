import { Box, Container, Typography } from '@mui/material';
import MessageList from "./components/MessageList.tsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./app/store.ts";
import { fetchMessages } from "./entities/Message/messagesThunks.ts";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {messages} = useSelector((state: RootState) => state.messages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

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