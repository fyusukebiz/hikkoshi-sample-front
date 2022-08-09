import React, { FC } from 'react';
import { css } from '@emotion/react';

const styles = {
  base: (bgColor: string) => css`
    display: inline-block;
    outline: none;
    cursor: pointer;
    background-color: ${bgColor};
    border: 1px solid ${bgColor};;
    border-radius: 0.25rem;
    color: #fff;
    line-height: 30px;
    font-weight: 400;
    text-align: center;
    :hover {
      background-color: ${bgColor};
      border-color: ${bgColor};
      filter: brightness(75%);
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

type Props = { 
  size?: 'sm' | 'mid' | 'lg',
  bgColor?: string
} & JSX.IntrinsicElements['button'];

export const Button: FC<Props> = (props) => {
  const { size = 'mid', bgColor = '#0070d2', ...attr } = props;
  return <button css={[styles.base(bgColor), styles[size]]} {...attr} />;
};
