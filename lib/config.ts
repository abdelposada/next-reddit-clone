import 'dotenv/config';

const config = {
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '0'),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  auth: {
    secret: process.env.SESSION_SECRET,
    authProviders: {
      auth0: {
        clientId: process.env.AUTH0_CLIENT_ID || '',
        clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
        domain: process.env.AUTH0_DOMAIN,
      },
      facebook: {
        clientId: process.env.FACEBOOK_CLIENT_ID || '',
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
      },
    },
  },
};

export default config;
