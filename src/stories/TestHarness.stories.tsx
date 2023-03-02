import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TestHarness } from "./TestHarness";
import { mapWidget } from "./MapWidget";
import { listWidget } from "./listWidget";
import { EChartWidget as eChartWidget } from "./echarts";

export default {
  component: TestHarness,
  args: {
    dataSetId: "example",
  },
  argTypes: {
    widgetsWithIds: {
      table: {
        disable: true,
      },
    },
  },
} satisfies ComponentMeta<typeof TestHarness>;

const Template: ComponentStory<typeof TestHarness> = (args) => <TestHarness {...args} />;

export const Default = Template.bind({});
Default.args = {
  widgetsWithIds: [
    { id: "mapWidget", ...mapWidget },
    { id: "listWidget", ...listWidget },
    { id: "eChartWidget", ...eChartWidget },
  ],
};
