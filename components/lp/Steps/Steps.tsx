import React from 'react';
import { css } from '@emotion/react';
import { StepCard } from './StepCard';
import { Title } from './Title';

export const Steps = () => {
  const styles = {
    titleMargin: css`
      margin-bottom: 10px;
    `,
    cardMargin: css`
      margin-bottom: 6px;
    `,
    bgColor: css`
      background-color: #f3f2ec;
      padding: 10px;
    `,
  };

  return (
    <div css={styles.bgColor}>
      <Title css={styles.titleMargin} />
      <StepCard index="1" title="不用品内容を入力" description="ご住所・不用品情報を入力" css={styles.cardMargin} image="/step1.jpg" />
      <StepCard
        index="2"
        title="見積もり結果を比較"
        description="ネット上で最大8社の見積もり料金を比較して気になる業者をチェック"
        css={styles.cardMargin}
        image="/step2.jpg"
      />
      <StepCard
        index="3"
        title="電話で打ち合わせ"
        description="廃品回収に関する疑問は業者に直接電話で質問してスッキリ解消✨"
        css={styles.cardMargin}
        image="/step3.jpg"
      />
      <StepCard
        index="4"
        title="業者を決定"
        description="各社の確定見積もりを比較して納得いく一社を決定!"
        css={styles.cardMargin}
        image="/step4.jpg"
      />
    </div>
  );
};
