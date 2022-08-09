import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import { Container } from './Container';

type Props = ComponentProps<typeof Container>;

const meta: Meta<Props> = {
  title: 'Container',
  component: Container,
  args: {
    children: 'Container',
  },
};

const Template: Story<Props> = ({ children, ...args }) => (
  <>
    <Container {...args} style={{ background: "red" }}>{children}</Container>
  </>
);

export const Default = Template.bind({});

export default meta;
