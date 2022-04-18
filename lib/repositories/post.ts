import AppDataSource from '@db';
import { Post } from '@graphql/models/Post';

export const PostRepository = AppDataSource.getRepository(Post);
