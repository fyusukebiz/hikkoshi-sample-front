import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const styles = {
  base: css`
    display: flex;
  `,
  img: css`
    object-fit: contain;
    height: auto;
    max-height: 50px;
    margin: 0 auto;
  `
}

export const TopBar = () => {
  return (
    <div css={styles.base} >
      <Link href="/">
        <img src="/logo.png" css={styles.img}/>
      </Link>
    </div>
  );
};
