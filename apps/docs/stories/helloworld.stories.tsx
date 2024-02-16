import type { Meta, StoryObj } from "@storybook/react";
import HelloWorld from "@acme/ui";

const meta: Meta = {
  title: "Hello World",
};

export default meta;

type Story = StoryObj;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <div>{HelloWorld}</div>
  ),
  name: "Hello World",
};
