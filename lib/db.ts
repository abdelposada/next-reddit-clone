
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { User } from '@graphql/models/User';
import { Post } from '@graphql/models/Post';
import { isProd } from '@constants';
import config from '@config';

const { host, port, username, password, database } = config.db;

const ormConfig: DataSourceOptions = {
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  entities: [User, Post],
  migrations: ['./lib/migrations'],
  migrationsTableName: 'typeorm_migrations',
  synchronize: !isProd,
  logging: !isProd,
  namingStrategy: new SnakeNamingStrategy(),
};

export default new DataSource(ormConfig);
