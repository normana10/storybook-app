import React, { FC } from "react";
import { BasicWidget, BasicWidgetProps, WidgetType } from "./Widget.types";

export const ListWidgetComponent = ({ getMetadataKeyName, getMetadatvalues }: BasicWidgetProps) => <p>I'm a list!</p>;

export const listWidget: BasicWidget = {
  title: "List Widget",
  Component: ListWidgetComponent,
  type: WidgetType.BASIC,
} satisfies BasicWidget;
