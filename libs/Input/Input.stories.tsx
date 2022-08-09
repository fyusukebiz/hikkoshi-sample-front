import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import { Input } from './Input';

type Props = ComponentProps<typeof Input>;

const meta: Meta<Props> = {
  title: 'Input',
  component: Input,
  args: {
    invalid: true,
    isSubmitted: false,
  },
};

const styles = {
  margin: css`
    display: block;
    content: "";
    margin: 10px 0;
  `
}

const Template: Story<Props> = (args) => (
  <>
    <Input isSubmitted={true} invalid={true} />
  </>
);

export const Default = Template.bind({});

export default meta;
