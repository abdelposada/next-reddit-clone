import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  deletePost: Scalars['Boolean'];
  login: User;
  register: User;
  updatePost?: Maybe<Post>;
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UserInput;
};


export type MutationRegisterArgs = {
  input: UserInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['String'];
  input?: InputMaybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PostInput = {
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  post?: Maybe<Post>;
  posts: Array<Post>;
};


export type QueryPostArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type UserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type PostFieldsFragment = { __typename?: 'Post', id: string, createdAt: any, updatedAt: any, title: string };

export type UserResponseFragment = { __typename?: 'User', id: string, username: string };

export type LoginMutationVariables = Exact<{
  input: UserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, username: string } };

export type RegisterMutationVariables = Exact<{
  input: UserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: string, username: string } };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, createdAt: any, updatedAt: any, title: string }> };

export const PostFieldsFragmentDoc = `
    fragment PostFields on Post {
  id
  createdAt
  updatedAt
  title
}
    `;
export const UserResponseFragmentDoc = `
    fragment UserResponse on User {
  id
  username
}
    `;
export const LoginDocument = `
    mutation Login($input: UserInput!) {
  login(input: $input) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['Login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    );
export const RegisterDocument = `
    mutation Register($input: UserInput!) {
  register(input: $input) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;
export const useRegisterMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RegisterMutation, TError, RegisterMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RegisterMutation, TError, RegisterMutationVariables, TContext>(
      ['Register'],
      (variables?: RegisterMutationVariables) => fetcher<RegisterMutation, RegisterMutationVariables>(client, RegisterDocument, variables, headers)(),
      options
    );
export const PostsDocument = `
    query Posts {
  posts {
    ...PostFields
  }
}
    ${PostFieldsFragmentDoc}`;
export const usePostsQuery = <
      TData = PostsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: PostsQueryVariables,
      options?: UseQueryOptions<PostsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<PostsQuery, TError, TData>(
      variables === undefined ? ['Posts'] : ['Posts', variables],
      fetcher<PostsQuery, PostsQueryVariables>(client, PostsDocument, variables, headers),
      options
    );