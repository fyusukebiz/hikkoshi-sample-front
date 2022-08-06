import React from 'react';
import { css } from '@emotion/react';
import { FieldValues } from 'react-hook-form';
import { HookFormProps } from '../common/hook-form/hookForm';
import { InputRHF } from '../common/hook-form/InputRHF';

type Props<T> = HookFormProps<T> & JSX.IntrinsicElements['input'];

export const MaterialInput = <T extends FieldValues>(
  props: Props<T>,
): React.ReactElement => {
  const { required = false, onChange, ...attr } = props;

  return (
    <div>
      <InputRHF<T>
        {...attr}
        rules={{
          onChange,
          required: { value: required, message: '回収物名を入力してください' },
        }}
      />
    </div>
  );
};
