import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../shared/axios/AxiosApi.ts";
import type { IMessage, IMessageMutation } from "./types.ts";

export const fetchMessages = createAsyncThunk('messages/fetchAll', async () => {
  const response = await BASE_URL.get<IMessage[]>('/messages');
  return response.data;
});

export const createMessage = createAsyncThunk(
  'messages/create',
  async (mutation: IMessageMutation) => {
    const formData = new FormData();
    formData.append('author', mutation.author);
    formData.append('message', mutation.message);
    if (mutation.image) {
      formData.append('image', mutation.image);
    }
    await BASE_URL.post('/messages', formData);
  }
);