import React from 'react';
import { FieldValues } from 'react-hook-form';
import { HookFormProps } from '../common/hook-form/hookForm';
import { InputRHF } from '../common/hook-form/InputRHF';

type Props<T> = HookFormProps<T> & JSX.IntrinsicElements['input'];

export const StreetInput = <T extends FieldValues>(
  props: Props<T>,
): React.ReactElement => {
  const { required = false, onChange, ...attr } = props;

  return (
    <InputRHF<T>
      {...attr}
      placeholder="番地 例) 6-1-1"
      rules={{
        onChange,
        required: { value: required, message: '番地を入力してください' },
      }}
    />
  );
};
