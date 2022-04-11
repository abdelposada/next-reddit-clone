import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, createdAt: any, updatedAt: any, title: string }> };

export const PostFieldsFragmentDoc = gql`
    fragment PostFields on Post {
  id
  createdAt
  updatedAt
  title
}
    `;
export const UserResponseFragmentDoc = gql`
    fragment UserResponse on User {
  id
  username
}
    `;
export const LoginDocument = gql`
    mutation login($input: UserInput!) {
  login(input: $input) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;
export const PostsDocument = gql`
    query posts {
  posts {
    ...PostFields
  }
}
    ${PostFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    login(variables: LoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutation>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'login', 'mutation');
    },
    posts(variables?: PostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostsQuery>(PostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'posts', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;