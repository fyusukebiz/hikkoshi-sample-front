import React from 'react';
import Image from 'next/image';

export const HeaderImage = () => {
  return <Image src="/header-image.png" layout="responsive" objectFit="contain" width="100" height="67" alt="廃品回収比べ" />;
};
