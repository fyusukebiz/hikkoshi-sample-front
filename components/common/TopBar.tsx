import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const TopBar = () => {
  return (
    <div>
      <Link href="/">
        <Image src="/logo.png" layout="responsive" objectFit="contain" width="100%" height="12px" alt="廃品回収比べ" />
      </Link>
    </div>
  );
};
