import React, { useState } from 'react';
import { css } from '@emotion/react';
import { FieldValues } from 'react-hook-form';
import { HookFormProps } from '../common/hook-form/hookForm';
import { InputRHF } from '../common/hook-form/InputRHF';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const styles = {
  button: css`
    height: 100%;
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 0;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  `,
  icon: css`
    height: 20px;
    width: 20px;
    color: gray;
  `,
  note: css`
    font-size: 11px;
    color: gray;
    line-height: 0.8;
  `,
};

type Props<T> = HookFormProps<T> & JSX.IntrinsicElements['input'];

export const PasswordInput = <T extends FieldValues>(
  props: Props<T>,
): React.ReactElement => {
  const [showPassword, setShowPassword] = useState(false);
  const { required = false, onChange, ...attr } = props;

  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <InputRHF<T>
        {...attr}
        type={showPassword ? 'text' : 'password'}
        rules={{
          onChange,
          required: {
            value: required,
            message: 'パスワードを入力してください',
          },
        }}
        rightElement={
          <button css={styles.button} onClick={handleClick} type="button">
            {showPassword ? (
              <AiFillEye css={styles.icon} />
            ) : (
              <AiFillEyeInvisible css={styles.icon} />
            )}
          </button>
        }
      />
      <p css={styles.note}>
        ※ 8文字以上 / 英大文字,英小文字,数字から2種類以上使用
      </p>
    </>
  );
};
