import React from 'react'
import { css } from '@emotion/react';
import { Card } from '@/libs/Card'
import { Company } from './CompanyList'
import Image from 'next/image';

const styles = {
  card: css`
    display: flex;
    margin: 10px 0;
  `,
  batch: css`
    position: relative;
    width: 50px;
    margin-right: 10px;
    @media screen and (min-width: 600px){
      margin: 0 20px;
    }
  `,
  companyName: css`
    font-weight: bold;
    font-size: 16px;
  `,
  ranking: css`
  `,
  content: css`
    flex-grow: 1;
  `,
  rating: css`
    color: white;
    background-color: orange;
    border-radius: 5px;
    padding: 5px;
  `,
  reputation: css`
    color: orange;
    font-weight: bold;
  `,
  review_count: css`
    color: gray;
    font-size: 12px; 
  `,
  reviews: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > div.review {
      width: calc(50% - 10px);
      display: flex;
    }
  `,
  dotted: css`
    top: calc(50% - 1px);
    border: none;
    border-top: 1px dotted grey;
    flex: 1;
    margin: 0 10px;
    position: relative;
  `,
}

const getReputation = (rating: number) => {
  if (rating > 4.5){
    return 'とても良い';
  } else if (rating > 4){
    return '良い';
  } else if (rating> 3){
    return 'まあまあ';
  } else {
    return '悪い';
  }
}

export const CompanyCard = ({ company, ranking }: { company: Company, ranking: number }) => {

  return (
    <Card css={styles.card}>
      <div css={styles.batch}>
        <Image src={`/no_${ranking}.png`} layout="fill" objectFit="contain" alt="ランキング" />
      </div>
      <div css={styles.content}>
        <div css={styles.companyName}>{company.name}</div>
        <div css={css`margin: 7px 0;`}>
          <span css={[styles.rating, css`margin-right: 5px;`]}>★ {company.ave_rating}</span>
          <span css={[styles.reputation, css`margin-right: 5px;`]} >{getReputation(company.ave_rating)}</span>
          <span css={styles.review_count}>{`(${company.review_count}件)`}</span>
        </div>
        <div css={styles.reviews}>
          <div className='review'>
            <span>作業スピード</span>
            <span css={styles.dotted}></span>
            <span>{company.speed_rating}点</span>
          </div>
          <div className='review'>
            <span>受付時の対応</span>
            <span css={styles.dotted}></span>
            <span>{company.reception_rating}点</span>
          </div>
          <div className='review'>
            <span>作業員の対応</span>
            <span css={styles.dotted}></span>
            <span>{company.worker_rating}点</span>
          </div>
          <div className='review'>
            <span>料金の適正さ</span>
            <span css={styles.dotted}></span>
            <span>{company.fee_rating}点</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
