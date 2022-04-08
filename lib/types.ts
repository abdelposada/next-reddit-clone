import type { NextApiRequest, NextApiResponse } from 'next';

type Session = { session: { userId: string } };
type UserSession = Session & { userId: string };

export type NextContext = {
  req: NextApiRequest & UserSession;
  res: NextApiResponse;
};
