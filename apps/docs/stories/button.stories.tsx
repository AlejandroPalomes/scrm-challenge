import { Button, ButtonProps } from '@acme/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'alternative', 'secondary'],
    },
		label: {
			controle: { type: 'input' }
		}
  }
} as Meta;

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  render: (props) => (
    <div className="">
      <Button
        {...props}
      />
    </div>
  ),
  name: 'Button',
  args: {
    label: 'Press me'
  },
};