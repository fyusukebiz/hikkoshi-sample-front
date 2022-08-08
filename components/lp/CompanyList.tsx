import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import { CompanyCard } from './CompanyCard';
import Image from 'next/image';

const styles = {
  dotted: css`
    top: calc(50% - 1px);
    border: none;
    border-top: 1px dashed silver;
    flex: 1;
    margin: 10px 0;
    position: relative;
  `,
  ranking: css`
    font-weight: bold;
    font-size: 30px;
    color: #dcbc07;
    margin: 0 10px;
  `,
  rankingContainer: css`
    display: flex;
  `,
  rankingInner: css`
    margin: 0 auto;
    display: flex;
    align-items: center;
  `,
  oukan: css`
    position: relative;
    width: 50px;
    height: 50px;
  `
}

export type Company = {
  name: string;
  ave_rating: number;
  review_count: number;
  speed_rating: number;
  reception_rating: number;
  worker_rating: number;
  fee_rating: number;
  description: number;
}
export type TCompanyList = Company[];

export const CompanyList = ({ companyList }: { companyList: TCompanyList }) => {
  return (
    <div>
      <div css={styles.rankingContainer}>
        <div css={styles.rankingInner}>
          <div css={styles.oukan}>
            <Image src={`/oukan.png`} layout="fill" objectFit="contain" alt="ランキング"/>
          </div>
          <span css={styles.ranking}>ランキング</span>
          <div css={styles.oukan}>
            <Image src={`/oukan.png`} layout="fill" objectFit="contain" alt="ランキング"/>
          </div>
        </div>
      </div>

      {companyList.map((company, index) => (
        <div key={index}>
          <CompanyCard company={company} ranking={index+1} />
          {index < (companyList.length - 1) && (
            <hr css={styles.dotted}/>
          )}
        </div>
      ))}
    </div>
  );
};
