import React, { FC } from 'react';
import { css } from '@emotion/react';

const styles = {
  card: css`
    border: solid;
    border-color: white;
    border-radius: 10px;
    background-color: white;
  `,
};

type Props = {
  children: React.ReactNode;
} & JSX.IntrinsicElements['div'];

export const Card: FC<Props> = ({ children, ...attr }) => {
  return (
    <div css={styles.card} {...attr}>
      {children}
    </div>
  );
};
