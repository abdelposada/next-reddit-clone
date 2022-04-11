import { getAppDataSource } from '@db';
import { Post } from '@graphql/models/Post';

export const PostRepository = getAppDataSource().getRepository(Post);
