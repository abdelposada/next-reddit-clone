import { NextApiHandler } from 'next';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Auth0Provider from 'next-auth/providers/auth0';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import argon2 from 'argon2';
import config from '@config';
import { User } from '@graphql/models/User';
import { isProd } from '@constants';
import AppDataSource from '@db';

const {
  authProviders: { auth0, facebook, google },
  secret,
} = config.auth;

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'wissar' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, _req) {
        if (!credentials) {
          return null;
        }

        if (!AppDataSource.isInitialized) {
          await AppDataSource.initialize();
        }
        const userRepository = AppDataSource.getRepository(User);
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
        return { id: user.id, name: user.username, email: user.username };
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
    GoogleProvider({
      clientId: google.clientId,
      clientSecret: google.clientSecret,
    }),
  ],
  secret,
  // session: {
  //   strategy: 'database',
  //   maxAge: 30 * 24 * 60 * 60,
  // },
  pages: {
    signIn: '/account/login',
    error: '/error',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  debug: !isProd,
  useSecureCookies: isProd,
  cookies: {
    sessionToken: {
      name: 'lilreddit.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: isProd,
      },
    },
    callbackUrl: {
      name: `lilreddit.callback-url`,
      options: {
        sameSite: 'lax',
        path: '/',
        secure: isProd,
      },
    },
    csrfToken: {
      name: `lilreddit.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: isProd,
      },
    },
  },
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, nextAuthOptions);

export default authHandler;
