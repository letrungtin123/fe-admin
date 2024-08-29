import * as dotenv from 'dotenv';

import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import connectDB from './configs/connect-db.config.js';
import apiDocumention from './docs/apidoc.doc.js';
import rootRoutes from './routes/index.js';

dotenv.config();

const app = express();

/* middlawares */
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }),
);

app.get('/', (_, res) => {
  res.send('Hello World');
});

// connect to MongoDB
connectDB();

// doc swagger
app.use('/documents', swaggerUi.serve, swaggerUi.setup(apiDocumention));

// routes
app.use(`/api/v1`, rootRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
