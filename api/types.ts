export interface Message {
  id: string;
  message: string;
  author: string;
  image: string | null;
  datetime: string;
}

export type MessageWithoutId = Omit<Message, 'id' | 'datetime'>;