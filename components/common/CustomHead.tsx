import { FC } from 'react';
import Head from 'next/head';

type Props = { title?: string; description?: string };

/* 元々のタイトルやmeta情報を上書きする */
export const CustomHead: FC<Props> = ({ title, description }) => {
  return (
    <Head>
      {title && <title>{`${title}｜廃品回収比べ`}</title>}
      {description && <meta name="description" content={description} />}
    </Head>
  );
};
