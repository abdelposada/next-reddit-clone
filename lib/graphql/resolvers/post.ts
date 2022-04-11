import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { PostRepository } from '@repositories/post';
import { Post } from '@graphql/models/Post';
import { PostInput } from '@graphql/types/post';
import { NextContext } from '@types';

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(@Ctx() {}: NextContext): Promise<Post[]> {
    return PostRepository.find({});
  }

  @Query(() => Post, { nullable: true })
  post(@Arg('id') id: string, @Ctx() {}: NextContext): Promise<Post | null> {
    return PostRepository.findOneOrFail({ where: { id } });
  }

  @Mutation(() => Post)
  async createPost(@Arg('input') { title }: PostInput, @Ctx() {}: NextContext): Promise<Post> {
    const post = PostRepository.create({ title });
    await post.save();
    return post;
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg('id') id: string,
    @Arg('input', () => String, { nullable: true }) input: PostInput,
    @Ctx() {}: NextContext
  ): Promise<Post | null> {
    const post = await PostRepository.findOneOrFail({ where: { id } });

    await PostRepository.save({
      ...post,
      ...input,
    });

    return post;
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg('id') id: string, @Ctx() {}: NextContext): Promise<boolean> {
    const post = await PostRepository.findOneBy({ id });
    if (!post) {
      // not Found
      return false;
    }
    await PostRepository.remove(post);
    return true;
  }
}
