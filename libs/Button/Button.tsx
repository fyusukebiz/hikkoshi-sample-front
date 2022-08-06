import React, { FC } from 'react';
import { css } from '@emotion/react';

const styles = {
  base: css`
    display: inline-block;
    outline: none;
    cursor: pointer;
    background-color: #0070d2;
    border-radius: 0.25rem;
    border: 1px solid #0070d2;
    color: #fff;
    line-height: 30px;
    font-weight: 400;
    text-align: center;
    :hover {
      background-color: #005fb2;
      border-color: #005fb2;
    }
    :disabled {
      background-color: #b1b1b4;
      cursor: not-allowed;
      border: none;
    }
  `,
  sm: css`
    font-size: 13px;
    padding: 0 16px;
  `,
  mid: css`
    font-size: 16px;
    padding: 5px 16px;
  `,
  lg: css`
    font-size: 24px;
    padding: 8px 16px;
  `,
};

type Props = { size?: 'sm' | 'mid' | 'lg' } & JSX.IntrinsicElements['button'];

export const Button: FC<Props> = (props) => {
  const { size = 'mid', ...attr } = props;
  return <button css={[styles.base, styles[size]]} {...attr} />;
};
