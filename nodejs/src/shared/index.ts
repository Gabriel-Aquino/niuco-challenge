import express from 'express';
import { config } from 'dotenv'

config();

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log('Server running at 3333')
})