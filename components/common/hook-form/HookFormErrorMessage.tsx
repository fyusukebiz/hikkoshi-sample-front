import React from 'react';
import { FieldPath, FieldValues, get, useFormContext } from 'react-hook-form';
import { HookFormProps } from './hookForm';

type Props<T> = {
  name: FieldPath<T>;
};

export const HookFormErrorMessage = <T extends FieldValues>(props: Props<T>): React.ReactElement | null => {
  const { name } = props;

  const {
    getValues,
    formState: { isSubmitted, touchedFields, errors },
  } = useFormContext<T>();

  const error = get(errors, name);

  return <div>HookFormErrorMessage</div>;
};
