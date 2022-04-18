import type { NextPage } from 'next';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { gqlClient } from '../api';
import { PostsQuery, usePostsQuery } from '@generated/graphql';

const Home: NextPage = () => {
  const { data: session } = useSession();
  const { data, error, isLoading } = usePostsQuery<PostsQuery, Error>(gqlClient, {});

  if (isLoading) {
    return <p>Is Loading</p>;
  }

  if (error) {
    return <p>{error?.message}</p>;
  }

  return (
    <div>
      <Head>
        <title>Lilreddit App</title>
        <meta name="description" content="Lilreddit app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data?.posts?.map((p) => (
        <div key={p.id}>{p?.title}</div>
      ))}
      {session && <div>{JSON.stringify(session)}</div>}
    </div>
  );
};

export default Home;
