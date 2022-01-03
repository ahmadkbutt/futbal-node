import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

dotenv.config();

const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: `${process.env.BASE_URL}:${process.env.PORT}`,
};
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors(corsOptions));

morgan('dev');

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

export default app;
