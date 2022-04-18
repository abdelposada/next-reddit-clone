import type { BuiltInProviderType } from 'next-auth/providers';
import type { ClientSafeProvider, LiteralUnion } from 'next-auth/react';

// Components a
export enum ColorVariant {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
}

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export enum Size {
  SMALL = 'small',
  REGULAR = 'regular',
  LARGE = 'large',
  AUTO = '',
}

export enum Spacing {
  EXTRA_SMALL = 'EXTRA_SMALL', // 2 .5rem 8px
  SMALL = 'SMALL', // 3 .75rem 12px
  MEDIUM = 'MEDIUM', // 4 1rem 16px
  LARGE = 'LARGE', // 6 1.5rem 24px
  EXTRA_LARGE = 'EXTRA_LARGE', // 8 2rem 32px
  AUTO = 'AUTO',
}

// export type SpacingType<T> = {
//   EXTRA_SMALL?: , // 2 .5rem 8px
//   SMALL = 'SMALL', // 3 .75rem 12px
//   MEDIUM = 'MEDIUM', // 4 1rem 16px
//   LARGE = 'LARGE', // 6 1.5rem 24px
//   EXTRA_LARGE = 'EXTRA_LARGE', // 8 2rem 32px
//   AUTO = 'AUTO',
// }

export type Margin = {
  ml?: Spacing;
  mr?: Spacing;
  mb?: Spacing;
  mt?: Spacing;
  mx?: Spacing;
  my?: Spacing;
  m?: Spacing;
};

export type Padding = {
  pl?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pt?: Spacing;
  px?: Spacing;
  py?: Spacing;
  p?: Spacing;
};

export type Border = {
  bl?: Spacing;
  br?: Spacing;
  bb?: Spacing;
  bt?: Spacing;
  bx?: Spacing;
  by?: Spacing;
  b?: Spacing;
};

export type Width = {
  w?: Size;
  minW?: Size;
  maxW?: Size;
};

export type Height = {
  h?: Size;
  minH?: Size;
  maxH?: Size;
};

export type CommonProps = Margin & Padding & Border & Width & Height;

export type Providers = Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>;

export const TWStyles = {
  bg: {
    DARK: 'dark:bg-dark',
    LIGHT: 'bg-light ',
  },
  text: {
    DARK: 'dark:text-white',
  },
  variant: {
    PRIMARY: 'bg-primary',
    SECONDARY: 'bg-secondary',
    TERTIARY: 'bg-tertiary',
  },
  outline: {
    PRIMARY: 'hover:bg-primary hover:text-white focus:outline-none bg-white text-gray-900 ring-1 ring-primary',
    SECONDARY: 'hover:bg-secondary hover:text-white focus:outline-none bg-white text-gray-900 ring-1 ring-secondary',
    TERTIARY: 'hover:bg-tertiary hover:text-white focus:outline-none bg-white text-gray-900 ring-1 ring-tertiary',
  },
  ml: {
    EXTRA_SMALL: 'ml-2',
    SMALL: 'ml-3',
    MEDIUM: 'ml-4',
    LARGE: 'ml-6',
    EXTRA_LARGE: 'ml-8',
    AUTO: 'ml-auto',
  },
  mr: {
    EXTRA_SMALL: 'mr-2',
    SMALL: 'mr-3',
    MEDIUM: 'mr-4',
    LARGE: 'mr-6',
    EXTRA_LARGE: 'mr-8',
    AUTO: 'mr-auto',
  },
  mb: {
    EXTRA_SMALL: 'mb-2',
    SMALL: 'mb-3',
    MEDIUM: 'mb-4',
    LARGE: 'mb-6',
    EXTRA_LARGE: 'mb-8',
    AUTO: 'mb-auto',
  },
  mt: {
    EXTRA_SMALL: 'mt-2',
    SMALL: 'mt-3',
    MEDIUM: 'mt-4',
    LARGE: 'mt-6',
    EXTRA_LARGE: 'mt-8',
    AUTO: 'mt-auto',
  },
  mx: {
    EXTRA_SMALL: 'mx-2',
    SMALL: 'mx-3',
    MEDIUM: 'mx-4',
    LARGE: 'mx-6',
    EXTRA_LARGE: 'mx-8',
    AUTO: 'mx-auto',
  },
  my: {
    EXTRA_SMALL: 'my-2',
    SMALL: 'my-3',
    MEDIUM: 'my-4',
    LARGE: 'my-6',
    EXTRA_LARGE: 'my-8',
    AUTO: 'my-auto',
  },
  m: {
    EXTRA_SMALL: 'm-2',
    SMALL: 'm-3',
    MEDIUM: 'm-4',
    LARGE: 'm-6',
    EXTRA_LARGE: 'm-8',
    AUTO: 'm-auto',
  },
  pl: {
    EXTRA_SMALL: 'pl-2',
    SMALL: 'pl-3',
    MEDIUM: 'pl-4',
    LARGE: 'pl-6',
    EXTRA_LARGE: 'pl-8',
  },
  pr: {
    EXTRA_SMALL: 'pr-2',
    SMALL: 'pr-3',
    MEDIUM: 'pr-4',
    LARGE: 'pr-6',
    EXTRA_LARGE: 'pr-8',
  },
  pb: {
    EXTRA_SMALL: 'pb-2',
    SMALL: 'pb-3',
    MEDIUM: 'pb-4',
    LARGE: 'pb-6',
    EXTRA_LARGE: 'pb-8',
  },
  pt: {
    EXTRA_SMALL: 'pt-2',
    SMALL: 'pt-3',
    MEDIUM: 'pt-4',
    LARGE: 'pt-6',
    EXTRA_LARGE: 'pt-8',
  },
  px: {
    EXTRA_SMALL: 'px-2',
    SMALL: 'px-3',
    MEDIUM: 'px-4',
    LARGE: 'px-6',
    EXTRA_LARGE: 'px-8',
  },
  py: {
    EXTRA_SMALL: 'py-2',
    SMALL: 'py-3',
    MEDIUM: 'py-4',
    LARGE: 'py-6',
    EXTRA_LARGE: 'py-8',
  },
  p: {
    EXTRA_SMALL: 'p-2',
    SMALL: 'p-3',
    MEDIUM: 'p-4',
    LARGE: 'p-6',
    EXTRA_LARGE: 'p-8',
  },
  bl: {
    EXTRA_SMALL: 'bl-2',
    SMALL: 'bl-3',
    MEDIUM: 'bl-4',
    LARGE: 'bl-6',
    EXTRA_LARGE: 'bl-8',
  },
  br: {
    EXTRA_SMALL: 'br-2',
    SMALL: 'br-3',
    MEDIUM: 'br-4',
    LARGE: 'br-6',
    EXTRA_LARGE: 'br-8',
  },
  bb: {
    EXTRA_SMALL: 'bb-2',
    SMALL: 'bb-3',
    MEDIUM: 'bb-4',
    LARGE: 'bb-6',
    EXTRA_LARGE: 'bb-8',
  },
  bt: {
    EXTRA_SMALL: 'bt-2',
    SMALL: 'bt-3',
    MEDIUM: 'bt-4',
    LARGE: 'bt-6',
    EXTRA_LARGE: 'bt-8',
  },
  bx: {
    EXTRA_SMALL: 'bx-2',
    SMALL: 'bx-3',
    MEDIUM: 'bx-4',
    LARGE: 'bx-6',
    EXTRA_LARGE: 'bx-8',
  },
  by: {
    EXTRA_SMALL: 'by-2',
    SMALL: 'by-3',
    MEDIUM: 'by-4',
    LARGE: 'by-6',
    EXTRA_LARGE: 'by-8',
  },
  b: {
    EXTRA_SMALL: 'b-2',
    SMALL: 'b-3',
    MEDIUM: 'b-4',
    LARGE: 'b-6',
    EXTRA_LARGE: 'b-8',
  },
  w: {},
};
