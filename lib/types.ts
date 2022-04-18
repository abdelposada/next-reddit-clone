import { ServerResponse } from 'http';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import type { Session } from 'next-auth';

export type NextContext = {
  req: MicroRequest;
  res: ServerResponse;
  session: Session;
};
