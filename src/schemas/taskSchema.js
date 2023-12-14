import { z } from 'zod';

export const taskSchema = z.object({
  title: z.string().min(3).max(500),
  description: z.string().min(3).max(500),
  // state: z.enum(['pending', 'completed']).optional(),
});
