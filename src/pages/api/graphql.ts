import 'reflect-metadata';
import Cors from 'micro-cors';
import type { PageConfig } from 'next';
import { NextApiHandler } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import { buildSchema } from 'type-graphql';
import { send } from 'micro';
import { UserResolver, PostResolver } from '@graphql/resolvers';
import { isProd } from '@constants';
import AppDataSource from '@db';

const cors = Cors(
  isProd
    ? {}
    : {
        origin: 'http://localhost:3000',
        allowCredentials: true,
        allowHeaders: [
          'Access-Control-Allow-Headers',
          'Origin',
          'Accept',
          'X-Requested-With',
          'Content-Type',
          'Access-Control-Request-Method',
          'Access-Control-Request-Headers',
          'x-forwarded-proto',
          'Access-Control-Allow-Credentials',
        ],
      }
);

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const schema = await buildSchema({
  resolvers: [UserResolver, PostResolver],
  dateScalarMode: 'isoDate',
});

const apolloServer = new ApolloServer({
  schema,
  context: async ({ req, res }) => {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }

    return {
      req,
      res,
    };
  },
});

let apolloServerHandler: NextApiHandler;

async function getApolloServerHandler() {
  if (!apolloServerHandler) {
    await apolloServer.start();
    apolloServerHandler = apolloServer.createHandler({
      path: '/api/graphql',
    });
  }

  return apolloServerHandler;
}

const handler: NextApiHandler = async (req, res) => {
  const apolloServerHandler = await getApolloServerHandler();
  if (req.method === 'OPTIONS') {
    return send(res, 200, 'ok!');
  }

  return apolloServerHandler(req, res);
};

//@ts-ignore
export default cors(handler);
