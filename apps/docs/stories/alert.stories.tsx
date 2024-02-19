import { Alert, AlertProps } from '@acme/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['error', 'success', 'notification'],
    },
		label: {
			controle: { type: 'input' }
		},
		disabled: {
			control: { type: 'boolean' },
		}
  }
} as Meta;

export default meta;

type Story = StoryObj<AlertProps>;

export const Primary: Story = {
  render: (props) => (
    <div>
      <Alert
        {...props}
      />
    </div>
  ),
  name: 'Alert',
  args: {
    label: 'This is an alert label',
		variant: 'success'
  },
};