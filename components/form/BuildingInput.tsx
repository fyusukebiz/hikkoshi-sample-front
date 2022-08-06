import React from 'react';
import { css } from '@emotion/react';
import { FieldValues } from 'react-hook-form';
import { HookFormProps } from '../common/hook-form/hookForm';
import { InputRHF } from '../common/hook-form/InputRHF';

type Props<T> = HookFormProps<T> & JSX.IntrinsicElements['input'];

export const BuildingInput = <T extends FieldValues>(
  props: Props<T>,
): React.ReactElement => {
  const { required = false, ...attr } = props;

  return <InputRHF<T> {...attr} placeholder="建物名（オプション）" />;
};
