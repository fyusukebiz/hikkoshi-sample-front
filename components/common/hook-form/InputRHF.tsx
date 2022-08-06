import React, { ComponentPropsWithoutRef } from 'react';
import { Input, ValidateProps } from '@/libs/Input';
import { FieldValues, get, Path, useFormContext } from 'react-hook-form';
import { HookFormProps } from './hookForm';
import { ErrorMessage } from '@hookform/error-message';

type Props<T> = HookFormProps<T> & Omit<ComponentPropsWithoutRef<typeof Input>, keyof ValidateProps>;
// ValidatePropsはRHFが持つ値

export const InputRHF = <T extends FieldValues>(props: Props<T>): React.ReactElement => {
  const { name, rules, ...attr } = props;

  const {
    register,
    formState: { isSubmitted, errors },
  } = useFormContext();

  const invalid = !!get(errors, name);

  return (
    <div>
      {/* <HookFormErrorMessage<T> name={name} /> */}
      <ErrorMessage errors={errors} name="singleErrorInput" render={({ message }) => <p>{message}</p>} />
      <Input {...register(name, rules)} invalid={invalid} isSubmitted={isSubmitted} {...attr} />
    </div>
  );
};
