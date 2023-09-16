import { Request, Response } from 'express';
import { authenticate } from './db-data';

export function authenticateUser(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = authenticate(email, password);

  if (user)
    res.status(200).json({ id: user.id, email: user.email });
  else
    res.status(403).json('You have entered an invalid username or password.');
}