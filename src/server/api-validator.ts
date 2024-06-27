import { Request, Response } from 'express';
import HTMLValidator from '../client/halidator';

const apiValidator = (req: Request, res: Response) => {
  const { html } = req.body;

  if (!html) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const validator = new HTMLValidator();
  const issues = validator['validateLocally'](html);

  res.json(issues);
};

export default apiValidator;