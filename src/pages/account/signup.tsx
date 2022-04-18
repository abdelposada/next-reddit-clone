import type { NextPage } from 'next';
import { getProviders } from 'next-auth/react';
import { Providers } from '@uitypes';
import Login from '@components/login/Login';

type SignUpPageProps = {
  providers: Providers;
};

const SignUpPage: NextPage<SignUpPageProps> = ({ providers }) => {
  return <Login providers={providers} />;
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

export default SignUpPage;
