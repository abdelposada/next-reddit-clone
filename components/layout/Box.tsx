import { getClasses } from '@utils';
import { ColorVariant, CommonProps } from '@uitypes';
import { FC } from 'react';

type BoxProps = {
  variant?: ColorVariant;
} & CommonProps;

const Box: FC<BoxProps> = ({ variant = ColorVariant.PRIMARY, children, ...props }) => {
  const boxClass = getClasses(props);
  return <div className={boxClass}>{children}</div>;
};

export default Box;
