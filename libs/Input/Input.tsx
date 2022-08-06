import React, { forwardRef, ReactNode } from 'react';
import { css } from '@emotion/react';

const styles = {
  container: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 3px;
    padding: 0 1.2rem;
  `,
  background: (invalid: boolean) => css`
    background-color: ${invalid ? '#fff5f5' : 'transparent'};
  `,
  border: (invalid: boolean, isSubmitted: boolean) => css`
    border: 1px solid ${invalid && isSubmitted ? '#dd171f' : '#ccc'};
  `,
  input: css`
    display: block;
    width: 100%;
    line-height: 1.3;
    padding: 0;
    appearance: none;
    outline: none;
    background-color: inherit;
    border: none;
    padding: 1.2rem 0;
    background-color: inherit;
  `,
  sideElement: css`
    display: flex;
    flex-shrink: 0;
    align-items: center;
  `,
};

// RHFから取得する値
export type ValidateProps = {
  invalid: boolean;
  isSubmitted: boolean;
};

type CustomProps = {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
};

type Props = JSX.IntrinsicElements['input'] & ValidateProps & CustomProps;

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    invalid = true,
    isSubmitted = false,
    leftElement,
    rightElement,
    className,
    ...attr
  } = props;

  return (
    <div
      css={[
        styles.container,
        styles.background(invalid),
        styles.border(invalid, isSubmitted),
      ]}
      className={className}
    >
      {leftElement && (
        <div css={[styles.sideElement, { marginRigh: 4 }]}>{leftElement}</div>
      )}
      <input css={styles.input} ref={ref} {...attr} />
      {rightElement && (
        <div css={[styles.sideElement, { marginLeft: 4 }]}>{rightElement}</div>
      )}
    </div>
  );
});
