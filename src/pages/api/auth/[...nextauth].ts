import NextAuth from 'next-auth/next';
import Auth0Provider from 'next-auth/providers/auth0';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import argon2 from 'argon2';
import config from '@config';
import { User } from '@graphql/models/User';
import { isProd } from '@constants';
import { getAppDataSource } from '@db';

const {
  authProviders: { auth0, facebook },
  secret,
} = config.auth;

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'wissar' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, _req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'Wissar', email: 'wissar@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        if (!credentials) {
          return null;
        }

        const AppDataSource = getAppDataSource();
        if (!AppDataSource.isInitialized) {
          await AppDataSource.initialize();
        }
        const userRepository = getAppDataSource().getRepository(User);
        const user = await userRepository.findOneBy({ username: credentials?.username });

        if (!user) {
          return null;
        }
        const validPassword = await argon2.verify(user.password, credentials.password);

        // If no error and we have user data, return it
        if (!validPassword) {
          return null;
        }
        // Return null if user data could not be retrieved
        return user;
      },
    }),
    Auth0Provider({
      clientId: auth0.clientId,
      clientSecret: auth0.clientSecret,
      // @ts-ignore
      domain: auth0.domain,
    }),
    FacebookProvider({
      clientId: facebook.clientId,
      clientSecret: facebook.clientSecret,
    }),
  ],
  secret,
  session: {
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {},
  callbacks: {},
  events: {},
  debug: !isProd,
});
