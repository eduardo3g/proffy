import express from 'express';
const routes = express.Router();

import db from './database/connection';

routes.get('/healthcheck', (request, response) => {
  return response.json({ status: 'Alive' });
});

routes.post('/classes', async (request, response) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule,
  } = request.body;

  await db('users').insert({
    name,
    avatar,
    whatsapp,
    bio,
  });

  return response.send();
});

export default routes;