export interface IMessage {
  id: string;
  message: string;
  author: string;
  datetime: string;
  image: string | null;
}

export interface IMessageMutation {
  author: string;
  message: string;
  image: File | null;
}

export interface MessagesState {
  messages: IMessage[];
  fetchLoading: boolean;
  createLoading: boolean;
}
