import 'dotenv/config';
import { DataSource } from 'typeorm';
import { User } from '@graphql/models/User';

let AppDataSource: DataSource | null = null;
export function getAppDataSource() {
  if (!AppDataSource) {
    AppDataSource = new DataSource({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '0'),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User],
      synchronize: false,
      logging: process.env.NODE_ENV === 'development',
    });
  }
  return AppDataSource;
}
