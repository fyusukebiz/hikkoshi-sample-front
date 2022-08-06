import { Input } from '@/libs/Input';
import React, { ComponentProps, ComponentPropsWithoutRef, ComponentPropsWithRef, FC, ReactElement } from 'react';
import { FieldValues } from 'react-hook-form';
import { HookFormProps } from '../common/hook-form/hookForm';
import { InputRHF } from '../common/hook-form/InputRHF';

type Props<T> = HookFormProps<T> & ComponentPropsWithoutRef<'input'>;

export const ZipCodeInput = <T extends FieldValues>(props: Props<T>): React.ReactElement => {
  return <InputRHF<T> {...props} placeholder="1500001" maxLength={7} inputMode="numeric" autoComplete="postal-code" type="tel" />;
};
