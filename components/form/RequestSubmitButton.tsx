import React from 'react';
import { css } from '@emotion/react';
import { Button } from '@/libs/Button';
import { useFormContext } from 'react-hook-form';

const styles = {
  base: css`
    width: 100px;
    margin: 0 auto;
    background-color: #2ab167;
    border-color: #2ab167;
    :hover {
      background-color: #159950;
      border-color: #159950;
    }
    :disabled {
      background-color: #b1b1b4;
      cursor: not-allowed;
      border: none;
    }
  `,
};

type Props = JSX.IntrinsicElements['button'];

export const RequestSubmitButton = (props: Props) => {
  const {
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useFormContext();

  console.log(errors);

  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    <Button
      css={styles.base}
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid}
    >
      送信
    </Button>
  );
};
