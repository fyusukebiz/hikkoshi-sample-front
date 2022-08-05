import React, { FC } from 'react';
import { css } from '@emotion/react';
import { Card } from '@/libs/Card';
import Image from 'next/image';

type Props = {
  index: string;
  title: string;
  description: string;
  image: string;
} & JSX.IntrinsicElements['div'];

const styles = {
  card: css`
    padding: 5px;
    display: flex;
  `,
  contnent: css`
    font-size: 14px;
    flex-grow: 1;
    padding-right: 10px;
  `,
  index: css`
    margin-right: 5px;
    font-size: 20px;
    color: red;
    font-weight: 700;
  `,
  title: css`
    font-weight: 700;
  `,
  dashedHr: css`
    border-top: 1px dashed silver;
  `,
  image: css`
    display: block;
    height: 80px;
    width: 80px;
    object-fit: contain;
  `,
};

export const StepCard: FC<Props> = (props) => {
  const { index, title, description, image, ...attr } = props;

  return (
    <Card css={styles.card} {...attr}>
      <div css={styles.contnent}>
        <div>
          <span css={styles.index}>{index}.</span>
          <span css={styles.title}>{title}</span>
        </div>
        <hr css={styles.dashedHr} />
        <div>{description}</div>
      </div>
      <img src={image} css={styles.image} />
    </Card>
  );
};
