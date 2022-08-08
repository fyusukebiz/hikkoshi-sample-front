import React from 'react'
import { css } from '@emotion/react';
import { Button } from '@/libs/Button'

const styles = {
  base: css`
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    width: 100px;
    background-color: #2ab167;
    border-color: #2ab167;
    display: flex;
    
    :hover {
      background-color: #159950;
      border-color: #159950;
    }
    :disabled {
      background-color: #b1b1b4;
      cursor: not-allowed;
      border: none;
    }
  `,
  titleContainer: css`
    display: flex; 
    align-items: center; 
    margin: 0 auto;
  `,
  free: css`
    border-radius: 3px;
    background-color: white;
    color: #2ab167;
    padding: 3px 10px;
    margin-right: 10px;
  `
}

type Props = JSX.IntrinsicElements['button']

export const EstimateButton = (props: Props) => {
  return (
    <Button css={styles.base} {...props}>
      <div css={styles.titleContainer}>
        <span css={styles.free}>無料</span>
        見積もりスタート
      </div>
    </Button>
  )
}
