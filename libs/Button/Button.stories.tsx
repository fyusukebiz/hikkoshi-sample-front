import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import { Button } from './Button';

type Props = ComponentProps<typeof Button>;

const meta: Meta<Props> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
    size: undefined,
    bgColor: undefined,
  },
};

const styles = {
  margin: css`
    display: block;
    content: "";
    margin: 10px 0;
  `
}

const Template: Story<Props> = ({ children, bgColor, ...args }) => (
  <>
    <Button {...args} size='sm'>{children}</Button>
    <br css={styles.margin}/>
    <Button {...args} size='mid'>{children}</Button>
    <br css={styles.margin}/>
    <Button {...args} size='lg'>{children}</Button>
    <br css={styles.margin}/>
    <hr/>
    <Button {...args} size={args.size} bgColor={bgColor}>{children}</Button>
  </>
);

export const Default = Template.bind({});

export default meta;
