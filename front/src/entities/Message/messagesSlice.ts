import { createSlice } from '@reduxjs/toolkit';
import type { MessagesState } from "./types.ts";
import { createMessage, fetchMessages } from "./messagesThunks.ts";

const initialState: MessagesState = {
  messages: [],
  fetchLoading: false,
  createLoading: false,
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state) => {
        state.fetchLoading = false;
      })

      .addCase(createMessage.pending, (state) => {
        state.createLoading = true;
      })
      .addCase(createMessage.fulfilled, (state) => {
        state.createLoading = false;
      })
      .addCase(createMessage.rejected, (state) => {
        state.createLoading = false;
      });
  },
});

export const messagesReducer = messagesSlice.reducer;