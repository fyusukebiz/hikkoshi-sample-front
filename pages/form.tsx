import React, { FC } from 'react';
import { css } from '@emotion/react';
import { FormInputs, RequestFormProvider } from '@/components/form';
import { ZipCodeInput } from '@/components/form/ZipCodeInput';
import { Container } from '@/libs/Container';
import { StreetInput } from '@/components/form/StreetInput';
import { BuildingInput } from '@/components/form/BuildingInput';
import { MaterialInputs } from '@/components/form/MaterialInputs';
import { NameInputs } from '@/components/form/NameInputs';
import { NameKanaInputs } from '@/components/form/NameKanaInputs';
import { PhoneInput } from '@/components/form/PhoneInput';
import { EmailInput } from '@/components/form/EmailInput';
import { PasswordInput } from '@/components/form/PasswordInput';
import { CollectingDay } from '@/components/form/CollectingDay';
import { RequestSubmitButton } from '@/components/form/RequestSubmitButton';
import { AddressFromZipcode } from '@/components/form/AddressFromZipcode';
import { NextPage } from 'next';
import { TopBar } from '@/components/common/TopBar';

const styles = {
  marginBottom: css`
    margin-bottom: 10px;
  `,
  marginTop: css`
    margin-top: 20px;
  `,
  button: css`
    display: flex;
  `,
};

const Form: NextPage = () => {
  return (
    <RequestFormProvider>
      <TopBar />
      <Container>
        <p css={styles.marginBottom}>■ 住所</p>
        <ZipCodeInput<FormInputs> name="zipcode" required />
        <AddressFromZipcode css={styles.marginBottom} />
        <StreetInput<FormInputs>
          name="street"
          css={styles.marginBottom}
          required
        />
        <BuildingInput<FormInputs>
          name="building"
          css={styles.marginBottom}
          required
        />

        <p css={styles.marginBottom}>■ 希望日</p>
        <CollectingDay name="date" />

        <p css={[styles.marginTop, styles.marginBottom]}>■ 回収物</p>
        <MaterialInputs css={styles.marginBottom} />

        <p css={[styles.marginTop, styles.marginBottom]}>■ 氏名</p>
        <NameInputs css={styles.marginBottom} />
        <NameKanaInputs css={styles.marginBottom} />

        <p css={[styles.marginTop, styles.marginBottom]}>■ 電話番号</p>
        <PhoneInput<FormInputs> name="phone" required />

        <p css={[styles.marginTop, styles.marginBottom]}>■ ログイン情報</p>
        <EmailInput<FormInputs>
          name="email"
          css={styles.marginBottom}
          required
        />
        <PasswordInput<FormInputs>
          name="password"
          css={styles.marginBottom}
          required
        />

        <div css={[styles.button, styles.marginTop]}>
          <RequestSubmitButton />
        </div>
      </Container>
    </RequestFormProvider>
  );
};

export default Form;
