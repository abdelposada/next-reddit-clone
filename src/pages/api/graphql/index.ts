import 'reflect-metadata';
import Cors from 'cors';
import type { PageConfig } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import { buildSchema } from 'type-graphql';
import { UserResolver } from '@graphql/resolvers';
import { getAppDataSource } from 'lib/db';
import { ServerResponse } from 'http';
import initMiddleware from '@middlewares/cors';
import { isProd } from '@constants';

const cors = initMiddleware(Cors(isProd ? {} : { origin: ['https://studio.apollographql.com'], credentials: true }));

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const schema = await buildSchema({
  resolvers: [UserResolver],
  dateScalarMode: 'isoDate',
});

const apolloServer = new ApolloServer({
  schema,
  context: async ({ req, res, connection }) => {
    const AppDataSource = getAppDataSource();
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }

    return {
      req,
      res,
      connection,
      AppDataSource,
    };
  },
  plugins: [],
  introspection: true,
});

const startServer = apolloServer.start();

export default async function graphqlHandler(req: any, res: ServerResponse) {
  await cors(req, res);
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}
