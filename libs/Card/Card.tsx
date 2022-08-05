import React, { FC } from 'react';
import { css } from '@emotion/react';

type Props = {
  children: React.ReactNode;
} & JSX.IntrinsicElements['div'];

export const Card: FC<Props> = ({ children, ...attr }) => {
  const styles = {
    card: css`
      border: solid;
      border-color: white;
      border-radius: 3px;
      background-color: white;
    `,
  };

  return (
    <div css={styles.card} {...attr}>
      {children}
    </div>
  );
};
