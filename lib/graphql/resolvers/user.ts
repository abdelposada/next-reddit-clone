import { Resolver, Mutation, Arg, Ctx, Query } from 'type-graphql';
import argon2 from 'argon2';
import { NotFoundError } from '@handlers/apollo-errors';
import { User } from '@graphql/models/User';
import { UserInput } from '@graphql/types/user';
import { NextContext } from '@types';

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: NextContext): Promise<User | null> {
    // Will change to other method
    if (!req.session?.userId) {
      return null;
    }

    const user = await User.findOneOrFail({ where: { id: 'req.userId' } });
    return user;
  }

  @Mutation(() => User)
  async register(@Arg('input') { username, password }: UserInput, @Ctx() {}: NextContext): Promise<User> {
    const hashedPassword = await argon2.hash(password);
    const user = User.create({ username, password: hashedPassword });
    await user.save();

    return user;
  }

  @Mutation(() => User)
  async login(@Arg('input') { username, password }: UserInput, @Ctx() {}: NextContext): Promise<User> {
    const user = await User.findOne({ where: { username } });

    // Let's not say we didn't find the user and just throw incorrect credentials instead
    if (!user) {
      throw new NotFoundError('Incorrect credentials');
    }
    const validPassword = await argon2.verify(user.password, password);

    if (!validPassword) {
      throw new NotFoundError('Incorrect credentials');
    }

    return user;
  }
}
