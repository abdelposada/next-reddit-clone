import { getAppDataSource } from '@db';
import { User } from '@graphql/models/User';

export const UserRepository = getAppDataSource().getRepository(User);
