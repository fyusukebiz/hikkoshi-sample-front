import React, { FC } from 'react';
import { css } from '@emotion/react';
import { Card } from '@/libs/Card';

type Props = {
  index: string;
  title: string;
  description: string;
  imagePath?: string;
} & JSX.IntrinsicElements['div'];

const styles = {
  cardPadding: css`
    padding: 5px;
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
};

export const StepCard: FC<Props> = (props) => {
  const { index, title, description, imagePath, ...attr } = props;

  return (
    <Card css={styles.cardPadding} {...attr}>
      <div>
        <span css={styles.index}>{index}.</span>
        <span css={styles.title}>{title}</span>
      </div>
      <hr css={styles.dashedHr} />
      <div>{description}</div>
    </Card>
  );
};
