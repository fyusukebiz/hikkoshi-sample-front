import React, { FC } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type Props = {
  children: React.ReactNode;
  defaultValues?: Record<string, unknown>;
};

export type FormInput = {
  zipcode: string;
  street: string;
  town: string;
  things: string[];
  last_name: string;
  last_name_kana: string;
  first_name: string;
  first_name_kana: string;
  email: string;
  password: string;
};

const initDefaultValues = {};

export const RequestFormProvider: FC<Props> = ({ children, defaultValues = initDefaultValues }) => {
  const methods = useForm<FormInput>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <>
        {children}
        {process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_RHF_DEBUG ? <DevTool control={methods.control} /> : null}
      </>
    </FormProvider>
  );
};
