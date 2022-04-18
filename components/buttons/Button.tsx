import { FC } from 'react';
import { ButtonType, ColorVariant, CommonProps } from '@uitypes';
import { getClasses } from '@utils';

type ButtonProps = {
  variant?: ColorVariant;
  outline?: ColorVariant;
  uppercase?: string;
  type?: ButtonType;
} & CommonProps;

const Button: FC<ButtonProps> = ({ children, outline, variant, uppercase, type = ButtonType.BUTTON, ...props }) => {
  const classes = getClasses<ButtonProps>(
    { ...props, ...(outline ? { outline } : { variant }) },
    'cursor-pointer w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 sm:flex-1 sm:py-3'
  );

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
