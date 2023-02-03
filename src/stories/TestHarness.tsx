import React, { FC, useState } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import ReactGridLayout, { Layout, WidthProvider } from "react-grid-layout";
import { Responsive } from "react-grid-layout";
import "./TestHarness.css";
import { MetadataType, Widget, WidgetType } from "./Widget.types";

// CSS to make things look pretty
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

export enum Environment {
  LATEST = "LATEST",
  INT = "INT",
  PROD = "PROD",
}

type TestHarnessProps = {
  environment: Environment;
  dataSetId: string;
  widgets: Widget[];
};

export const TestHarness = ({ widgets }: TestHarnessProps) => {
  const widgetsWithIds = widgets.map((widget) => ({ ...widget, id: crypto.randomUUID() }));

  // Basic
  const getMetadataKeyName = "metadataKeyName";
  const getMetadatvalues = ["getMetadatvalues"];
  const [filteredMetadataValues, setFilteredMetadataValues] = useState<string[]>([]);

  // Advanced
  const dxResultSet = "dxResultSet";
  const dataSetId = "dataSetId";
  const getMetadataList = () => ["metadata"];
  const getMetadata = (metadataKeys: string[]) => ({
    recordId: { metadataKey: ["metadataValue1", "metadataValue2"] },
  });
  const getFilteredMetadata = (metadataKeys: string[]) => ({
    recordId: { metadataKey: ["metadataValue1", "metadataValue2"] },
  });
  const [filteredToValues, setFilteredToValues] = useState<string[]>([]);

  //TODO: Fetch Data

  const layout = widgetsWithIds.map((widget) => ({
    i: widget.id,
    x: 0,
    y: 0,
    w: 6,
    h: 9,
    minw: 2,
    minH: 3,
  })) satisfies Layout[];

  return (
    <ReactGridLayout
      layout={layout}
      cols={10}
      rowHeight={30}
      width={1000}
      draggableHandle={".draggableClass"}
      compactType={null}
    >
      {widgetsWithIds.map(({ id, title, type, Component }) => (
        <div key={id} className="outerDiv">
          <div className="innerDiv">
            <p className="draggableClass">{title} (Drag Here)</p>
            <hr style={{ margin: "6px 0px 10px 0px" }} />
            {type === WidgetType.BASIC ? (
              <Component
                getMetadataKeyName={"foo"}
                getMetadatvalues={["foo"]}
                setFilteredMetadataValues={(filteredMetadataValues) =>
                  setFilteredMetadataValues(filteredMetadataValues)
                }
              />
            ) : (
              <Component
                dxResultSet="foo"
                getMetadataList={getMetadataList}
                getMetadata={getMetadata}
                getFilteredMetadata={getFilteredMetadata}
                setFilteredToValues={(filteredToValues) => setFilteredToValues(filteredToValues)}
              />
            )}
          </div>
        </div>
      ))}
    </ReactGridLayout>
  );
};
