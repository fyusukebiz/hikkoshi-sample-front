import React, { FC } from 'react';
import { css } from '@emotion/react';

const styles = {
  title: css`
    background-color: white;
    font-size: 24px;
    color: red;
    padding: 5px;
    text-align: center;
  `,
};

type Props = JSX.IntrinsicElements['div'];

export const Title: FC<Props> = ({ ...attr }) => {
  return (
    <div css={styles.title} {...attr}>
      お手続きの流れ
    </div>
  );
};
