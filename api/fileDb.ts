import { promises as fs } from 'fs';
import { Message, MessageWithoutId } from "./types";
import path from "path";

const fileName = path.join(__dirname, 'db.json');

let data: Message[] = [];

const fileDb = {
  async init() {
    try {
      const fileContents = await fs.readFile(fileName);
      data = JSON.parse(fileContents.toString());
    } catch (e) {
      data = [];
    }
  },

  async getItems() {
    return data;
  },

  async addItem(item: MessageWithoutId) {
    const message: Message = {
      author: item.author.trim() ? item.author : 'Anonymous',
      message: item.message,
      image: item.image,
      id: crypto.randomUUID(),
      datetime: new Date().toISOString()
    };
    data.push(message);
    await this.save();
    return message;
  },

  async save() {
    await fs.writeFile(fileName, JSON.stringify(data));
  }
};

export default fileDb;