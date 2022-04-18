import AppDataSource from '@db';
import { User } from '@graphql/models/User';

export const UserRepository = AppDataSource.getRepository(User);
