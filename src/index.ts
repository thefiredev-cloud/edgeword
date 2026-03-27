import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import dotenv from 'dotenv';
import { sessionsRouter } from './api/sessions';
import { logger } from './utils/logger';

dotenv.config();

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server, path: '/rt' });

app.use(express.json());

app.get('/health', (_, res) => res.json({ status: 'ok', service: 'edgeword' }));
app.use('/v1/sessions', sessionsRouter);

// Real-time coaching WebSocket
wss.on('connection', (ws, req) => {
  const sessionId = req.url?.split('/').pop();
  logger.info('WebSocket connected', { sessionId });
  // TODO: Route to coaching session handler
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  logger.info(`EdgeWord API + WS running on port ${PORT}`);
});

export default app;
