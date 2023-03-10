import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TestHarness } from "./TestHarness";
import { mapWidget } from "./MapWidget";
import { listWidget } from "./listWidget";
import { EChartWidget as eChartWidget } from "./echarts";
import { dudWidget } from "./dudWidget";

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
  parameters: {
    layout: "fullscreen",
  },
} satisfies ComponentMeta<typeof TestHarness>;

const Template: ComponentStory<typeof TestHarness> = (args) => (
  <div style={{ display: "flex", height: "100vh" }}>
    <TestHarness {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  widgetsWithIds: [
    { id: "dudWidget", ...dudWidget },
    { id: "mapWidget", ...mapWidget },
    { id: "listWidget", ...listWidget },
    { id: "eChartWidget1", ...eChartWidget },
    { id: "eChartWidget2", ...eChartWidget },
  ],
};
