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

export const NameKanaInputs: FC<Props> = (props) => {
  const {
    register,
    formState: { isSubmitted, errors },
  } = useFormContext();

  return (
    <div css={styles.container} {...props}>
      <div css={styles.item}>
        <Input
          {...register('last_name_kana', {
            required: { value: true, message: 'セイを入力してください' },
          })}
          placeholder={'セイ'}
          invalid={!!get(errors, 'last_name_kana')}
          isSubmitted={!!get(isSubmitted, 'last_name_kana')}
        />
      </div>
      <div css={styles.item}>
        <Input
          {...register('first_name_kana', {
            required: { value: true, message: 'メイを入力してください' },
          })}
          placeholder={'メイ'}
          invalid={!!get(errors, 'first_name_kana')}
          isSubmitted={!!get(isSubmitted, 'first_name_kana')}
        />
      </div>
    </div>
  );
};
