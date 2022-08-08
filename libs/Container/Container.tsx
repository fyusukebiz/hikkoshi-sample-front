import React, { FC } from 'react';
import { css } from '@emotion/react';

type Props = {
  children: React.ReactNode;
};

const styles = {
  container: css`
    margin: 0 auto;
    padding: 20px 10px;
    max-width: 600px;
    @media screen and (min-width: 600px) {
      padding: 10px auto;
    }
  `,
};

export const Container: FC<Props> = ({ children }) => {
  return <div css={styles.container}>{children}</div>;
};
