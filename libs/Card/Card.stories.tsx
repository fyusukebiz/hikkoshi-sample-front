import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Card } from './Card';

type Props = ComponentProps<typeof Card>;

const meta: Meta<Props> = {
  title: 'Card',
  component: Card,
  args: {
    children: 'Card',
  },
};

const Template: Story<Props> = ({ children, ...args }) => (
  <>
    <Card {...args}>{children}</Card>
  </>
);

export const Default = Template.bind({});

export default meta;
