import { Box, Container, Typography } from '@mui/material';
import MessageList from "./components/MessageList.tsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./app/store.ts";
import {
  createMessage,
  fetchMessages
} from "./entities/Message/messagesThunks.ts";
import { ChatForm } from "./components/ChatForm.tsx";
import type { IMessageMutation } from "./entities/Message/types.ts";
import Spinner from "./shared/Spinner/Spinner.tsx";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    messages,
    createLoading,
    fetchLoading
  } = useSelector((state: RootState) => state.messages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const handleFormSubmit = async (data: IMessageMutation) => {
    await dispatch(createMessage(data));
    dispatch(fetchMessages());
  };

  return (
    <Box>
      <Container maxWidth="md" disableGutters>
        <Box sx={{textAlign: 'center', marginBottom: 3}}>
          <Typography variant="h3" sx={{m: 3}}>
            React-Guestbook
          </Typography>
        </Box>
        <ChatForm onSubmit={handleFormSubmit} isLoading={createLoading} />

        {
          fetchLoading
            ? <Spinner isLoading={fetchLoading} />
            : <MessageList messages={messages} />
        }

      </Container>
    </Box>
  );
};

export default App;