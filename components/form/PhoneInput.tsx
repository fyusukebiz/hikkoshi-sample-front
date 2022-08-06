import React from 'react';
import { FieldValues } from 'react-hook-form';
import { HookFormProps } from '../common/hook-form/hookForm';
import { InputRHF } from '../common/hook-form/InputRHF';

type Props<T> = HookFormProps<T> & JSX.IntrinsicElements['input'];

export const PhoneInput = <T extends FieldValues>(
  props: Props<T>,
): React.ReactElement => {
  const { required = false, onChange, ...attr } = props;

  return (
    <InputRHF<T>
      {...attr}
      type="tel"
      placeholder="例）08012341234"
      rules={{
        onChange,
        required: { value: required, message: '電話番号を入力してください' },
      }}
    />
  );
};
