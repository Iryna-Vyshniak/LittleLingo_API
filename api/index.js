import express from 'express';
import cors from 'cors';

import env from '../utils/env.js';
import connectToMongoDB from '../db/connectToMongoDB.js';
import stagesRouter from '../routes/stage.route.js';
import missingRouteHandler from '../middlewares/missingRouteHandler.js';
import globalErrorHandler from '../middlewares/globalErrorHandler.js';

const port = env('PORT', '300');
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true })); // to parse form data (from req.body)

app.use('/api/test', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to the API LittleLingo',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/stages', stagesRouter);

app.use(missingRouteHandler);
app.use(globalErrorHandler);

app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server running on ${port} PORT`);
});

export default app;
