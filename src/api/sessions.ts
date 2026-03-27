import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { logger } from '../utils/logger';

export const sessionsRouter = Router();

const SessionRequestSchema = z.object({
  mode: z.enum(['earpiece', 'screen', 'analysis']),
  context: z.object({
    negotiation_type: z.enum(['salary', 'sales', 'procurement', 'real_estate', 'legal']),
    your_position: z.string(),
    target_outcome: z.string(),
    walkaway_point: z.string().optional(),
  }),
  party_profile: z.object({
    name: z.string().optional(),
    company: z.string().optional(),
    linkedin_url: z.string().url().optional(),
  }).optional(),
});

sessionsRouter.post('/', async (req: Request, res: Response) => {
  try {
    const parsed = SessionRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid request', details: parsed.error.issues });
    }

    const sessionId = `sess_${Date.now()}`;
    logger.info('Session created', { sessionId, mode: parsed.data.mode });

    return res.status(201).json({
      session_id: sessionId,
      websocket_url: `${process.env.WS_BASE_URL}/rt/${sessionId}`,
      briefing: null, // TODO: Generate pre-call briefing
      recommended_opening: null, // TODO: Generate opening recommendation
    });
  } catch (err) {
    logger.error('Session creation failed', { error: err });
    return res.status(500).json({ error: 'Internal server error' });
  }
});
