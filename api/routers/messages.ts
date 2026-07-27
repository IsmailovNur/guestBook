import express from "express";
import fileDb from "../fileDb";
import { MessageWithoutId } from "../types";

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  const queryDate = req.query.datetime as string;
  const messages = await fileDb.getItems();

  if (queryDate) {
    const date = new Date(queryDate);

    if (isNaN(date.getDate())) {
      res.status(400).send({ error: "Invalid date!" });
      return;
    }

    const filteredMessages = messages.filter(m => m.datetime > queryDate).slice(-30);
    res.send(filteredMessages);
    return;
  }

  const lastMessages = messages.slice(-30);
  res.send(lastMessages);
});

messagesRouter.post('/', async (req, res) => {

  const { author, message } = req.body;

  if (!author || !message || author.trim() === '' || message.trim() === '') {
    res.status(400).send({ error: "Invalid author or message!, this filed are required!" });
    return;
  }

  const newMessage: MessageWithoutId = {
    author: author,
    message: message
  };

  const savedMessage = await fileDb.addItem(newMessage);
  res.send(savedMessage);

});

export default messagesRouter;