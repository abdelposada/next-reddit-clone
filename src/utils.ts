import classNames, { Argument } from 'classnames';
import { CommonProps, TWStyles } from '@uitypes';

export function getClasses<T>(props: CommonProps & T, ...args: Argument[]): string {
  const classes = Object.keys(props).reduce((prev, current) => {
    //@ts-ignore
    return { ...prev, [TWStyles[current]?.[props[current]]]: true };
  }, {});
  return classNames(classes, args);
}
