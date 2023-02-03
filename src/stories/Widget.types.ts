import { FC } from "react";

type Provider<T> = () => T;
type Consumer<T> = (arg: T) => void;
type Func<I, O> = (arg: I) => O;

export type MetadataType = {
  [recordId: string]: {
    [metaDataKey: string]: string[];
  };
};

export enum WidgetType {
  BASIC = "BASIC",
  ADVANCED = "ADVANCED",
}

export type Widget = BasicWidget | AdvancedWidget;

export interface BaseWidget {
  type: WidgetType;
  title: string;
}

// Basic
export interface BasicWidgetProps {
  getMetadataKeyName: string;
  getMetadatvalues: string[];
  setFilteredMetadataValues: Consumer<string[]>;
}

export interface BasicWidget extends BaseWidget {
  type: WidgetType.BASIC;
  Component: FC<BasicWidgetProps>;
}

// Advanced
export interface AdvancedWidgetProps {
  dxResultSet: string;
  getMetadataList: Provider<string[]>;
  getMetadata: Func<string[], MetadataType>;
  getFilteredMetadata: Func<string[], MetadataType>;
  setFilteredToValues: Consumer<string[]>;
}

export interface AdvancedWidget extends BaseWidget {
  type: WidgetType.ADVANCED;
  Component: FC<AdvancedWidgetProps>;
}
