import React from 'react';
import { css } from '@emotion/react';
import { FieldValues, useFormContext } from 'react-hook-form';
import { HookFormProps } from '../common/hook-form/hookForm';
import { InputRHF } from '../common/hook-form/InputRHF';

type Props<T> = HookFormProps<T> & JSX.IntrinsicElements['input'];

export const ZipCodeInput = <T extends FieldValues>(
  props: Props<T>,
): React.ReactElement => {
  const { required = false, ...attr } = props;

  return (
    <InputRHF<T>
      {...attr}
      placeholder="1500001"
      maxLength={7}
      inputMode="numeric"
      autoComplete="postal-code"
      type="tel"
      rules={{
        required: { value: required, message: '郵便番号を入力してください' },
      }}
    />
  );
};
