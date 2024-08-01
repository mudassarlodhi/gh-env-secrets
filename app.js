import bodyParser from 'body-parser';
import express from 'express';

import eventRoutes from './routes/events.js';

const app = express();

app.use(bodyParser.json());

app.use(eventRoutes);

app.listen(process.env.PORT, () => {
  window.console.log("Starting listening on port ", process.env.PORT);
});
