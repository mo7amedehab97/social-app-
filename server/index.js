import express from 'express';
import dotenv from 'dotenv';
import { chats } from './data/data.js';

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api/chat', (req, res) => {
  res.send(chats);
});

app.listen(PORT, () => {
  console.log('server running in port 5000');
});
