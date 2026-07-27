import express from "express";
import fileDb from "../fileDb";
import { upload } from "../multer";

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  const messages = await fileDb.getItems();
  res.send(messages);
});

messagesRouter.post('/', upload.single('image'), async (req, res) => {
  if (!req.body.message || !req.body.message.trim()) {
    return res.status(400).send({error: 'Invalid text message!'});
  }

  const newMessage = await fileDb.addItem({
    author: req.body.author || 'Anonymous',
    message: req.body.message,
    image: req.file ? req.file.filename : null,
  });

  res.send(newMessage);
});

export default messagesRouter;