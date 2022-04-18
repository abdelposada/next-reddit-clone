import { FC, useMemo } from 'react';
import { Form, Formik } from 'formik';
import { signIn } from 'next-auth/react';
import { ButtonType, ColorVariant, Providers, Spacing } from '@uitypes';
import Box from '@components/layout/Box';
import Input from '@components/forms/InputField';
import Button from '@components/buttons/Button';
import Title from '@components/headings/Title';
import ProviderSSOButton from './ProviderSSOButton';

type LoginProps = {
  providers: Providers;
};

const Login: FC<LoginProps> = ({ providers }) => {
  const providersToRender = useMemo(
    () => Object.values(providers).filter((provider) => provider.name !== 'credentials'),
    [providers]
  );

  return (
    <Box p={Spacing.LARGE}>
      <Title>Login</Title>
      <p className="mb-12 mt-2">By continuing, you agree to our User Agreement and Privacy Policy.</p>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          signIn(providers.credentials.id, { ...values, callbackUrl: '/test' });
        }}
        validate={(values) => {
          const errors: { username?: string } = {};
          if (!values.username) {
            errors.username = 'is required';
          }
          return errors;
        }}
      >
        <Form className="w-72 mx-auto">
          <Box>
            {providersToRender.map((provider) => (
              <ProviderSSOButton key={provider.name} provider={provider} />
            ))}
          </Box>
          <Box mb={Spacing.MEDIUM} mx={Spacing.AUTO}>
            OR
          </Box>
          <Input label="username" name="username" type="text" placeholder="Username" required />
          <Input mt={Spacing.SMALL} label="password" name="password" type="text" placeholder="Password" />
          <Button mt={Spacing.SMALL} type={ButtonType.SUBMIT} variant={ColorVariant.PRIMARY}>
            Submit
          </Button>
          <Box>Forgot your username or password?</Box>
          <Box>New to Reddit? SIGN UP</Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default Login;
