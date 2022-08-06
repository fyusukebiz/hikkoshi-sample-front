import React, { FC } from 'react';
import { RequestFormProvider } from '@/components/form';
import { ZipCodeInput } from '@/components/form/ZipCodeInput';
import { Container } from '@/libs/Container';

const Form: FC = () => {
  return (
    <RequestFormProvider>
      <Container>
        <ZipCodeInput name="zipcode" required />
        {/* <StreetInput /> */}
      </Container>
    </RequestFormProvider>
  );
};

export default Form;
