import React, { ComponentPropsWithoutRef } from 'react';
import { Input, ValidateProps } from '@/libs/Input';
import { FieldValues, get, useFormContext } from 'react-hook-form';
import { HookFormProps } from './hookForm';

type Props<T> = HookFormProps<T> &
  Omit<ComponentPropsWithoutRef<typeof Input>, keyof ValidateProps>;
// ValidatePropsはRHFが持つ値

export const InputRHF = <T extends FieldValues>(
  props: Props<T>,
): React.ReactElement => {
  const { name, rules, ...attr } = props;

  const {
    register,
    formState: { isSubmitted, errors },
  } = useFormContext();

  const invalid = !!get(errors, name);

  return (
    <Input
      {...register(name, rules)}
      invalid={invalid}
      isSubmitted={isSubmitted}
      {...attr}
    />
  );
};
