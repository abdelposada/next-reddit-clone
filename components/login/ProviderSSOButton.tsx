import { FC } from 'react';
import { ClientSafeProvider } from 'next-auth/react';
import Button from '@components/buttons/Button';
import { ColorVariant, Spacing } from '@uitypes';

type ProviderSSOButton = {
  provider: ClientSafeProvider;
};

const ProviderSSOButton: FC<ProviderSSOButton> = ({ provider }) => {
  return (
    <Button my={Spacing.SMALL} outline={ColorVariant.TERTIARY}>
      Continue with {provider.name}
    </Button>
  );
};

export default ProviderSSOButton;
