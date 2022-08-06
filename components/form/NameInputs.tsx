import React, { FC } from 'react';
import { css } from '@emotion/react';
import { get, useFormContext } from 'react-hook-form';
import { Input } from '@/libs/Input';

const styles = {
  container: css`
    display: flex;
    justify-content: space-between;
  `,
  item: css`
    width: 48%;
  `,
};

type Props = JSX.IntrinsicElements['div'];

export const NameInputs: FC<Props> = (props) => {
  const {
    register,
    formState: { isSubmitted, errors },
  } = useFormContext();

  return (
    <div css={styles.container} {...props}>
      <div css={styles.item}>
        <Input
          {...register('last_name', {
            required: { value: true, message: '姓を入力してください' },
          })}
          placeholder={'姓'}
          invalid={!!get(errors, 'last_name')}
          isSubmitted={!!get(isSubmitted, 'last_name')}
        />
      </div>
      <div css={styles.item}>
        <Input
          {...register('first_name', {
            required: { value: true, message: '名を入力してください' },
          })}
          placeholder={'名'}
          invalid={!!get(errors, 'first_name')}
          isSubmitted={!!get(isSubmitted, 'first_name')}
        />
      </div>
    </div>
  );
};
