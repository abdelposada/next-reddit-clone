import { ApolloError } from 'apollo-server-errors';

export class NotFoundError extends ApolloError {
  constructor(message: string) {
    super(message, 'NOT_FOUND');

    Object.defineProperty(this, 'name', { value: 'Entity not found' });
  }
}

export class AlreadyExistError extends ApolloError {
  constructor(message: string) {
    super(message, 'ALREADY_EXIST');

    Object.defineProperty(this, 'name', { value: 'Entity already exist' });
  }
}
