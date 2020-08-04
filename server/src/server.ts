import express from 'express';

const app = express();

app.get('/healthcheck', (request, response) => {
  return response.json({ status: 'Alive' });
});

app.listen(3333);