import React from 'react';
import { css } from '@emotion/react';
import { TopBar } from '@/components/common/TopBar';
import { HeaderImage } from './HeaderImage';
import { Steps } from './Steps';
import { CompanyList, TCompanyList } from './CompanyList';
import { Container } from '@/libs/Container';
import { EstimateButton } from './EstimateButton';

const styles = {
  redBorder: css`
    border-color :red;
    margin: 20px 0;
  `,
  estimateButton: css`
    width: 100%;
    margin: 10px 0;
  `
}

export const Lp = ({ companyList }: { companyList: TCompanyList }) => {
  return (
    <>
      <TopBar />
      <HeaderImage />
      <Container>
        <EstimateButton css={styles.estimateButton}/>
        <hr css={styles.redBorder}/>
        <CompanyList companyList={companyList}/>
        <hr css={styles.redBorder}/>
        <Steps />
        <EstimateButton css={styles.estimateButton}/>
      </Container>
    </>
  );
};
