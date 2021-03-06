import { FC, InputHTMLAttributes } from 'react';
import { ErrorMessage, Field } from 'formik';
import { CommonProps } from '@uitypes';
import { getClasses } from '@utils';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
} & CommonProps;

const Input: FC<InputFieldProps> = ({ label, name, placeholder, ...props }) => {
  const classes = getClasses(
    props,
    'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
  );

  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input id={name} placeholder={placeholder} className={classes} {...props} />
    </div>
  );
};

const InputField: FC<InputFieldProps> = (props) => {
  return (
    <>
      <Field as={Input} {...props} />
      <ErrorMessage name={props.name} component="div" />
    </>
  );
};

export default InputField;
