// YourComponent.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoadingIndicator from "./LoadingIndicator";

export default {
  title: "LoadingIndicator",
  component: LoadingIndicator,
} as ComponentMeta<typeof LoadingIndicator>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof LoadingIndicator> = (args) => (
  <LoadingIndicator {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
