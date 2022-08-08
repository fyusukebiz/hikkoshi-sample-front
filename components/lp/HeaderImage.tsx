import React from 'react';
import { css } from '@emotion/react';
// import Image from 'next/image';

const styles = {
  base: css`
    position: relative;
    width: 100%;
    max-height: 800px;
    height: auto;
    overflow: hidden;
  `,
  img: css`
    object-fit: contain;
    width: 100%;
    overflow: hidden;
  `
}

export const HeaderImage = () => {
  return (
    <div css={styles.base}>
      <img src="/header-image.png" css={styles.img} />
    </div>
  )
};