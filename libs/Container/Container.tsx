import React, { FC } from 'react';
import { css } from '@emotion/react';

type Props = {
  children: React.ReactNode;
};

const styles = {
  container: css`
    margin: 10px 10px;
    max-width: 600px;
    @media screen and (min-width: 600px) {
      margin: 10px auto;
    }
  `,
};

export const Container: FC<Props> = ({ children }) => {
  return <div css={styles.container}>{children}</div>;
};
