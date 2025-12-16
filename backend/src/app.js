import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import dotenv from 'dotenv';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

dotenv.config();

export default app;
