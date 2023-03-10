import React, { FC, useState } from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import ReactGridLayout, { Layout } from "react-grid-layout";
import { Widget, WidgetType } from "./Widget.types";

// CSS to make things look pretty
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { Box, styled, Typography } from "@material-ui/core";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@material-ui/lab";

export enum Environment {
  LATEST = "LATEST",
  INT = "INT",
  PROD = "PROD",
}

type WidgetWithId = Widget & {
  id: string;
};

type TestHarnessProps = {
  environment: Environment;
  dataSetId: string;
  widgetsWithIds: WidgetWithId[];
};
// const widgetsWithIds = widgets.map((widget) => ({ ...widget, id: crypto.randomUUID() }));

const FlexBox = styled(Box)({ display: "flex", flex: "1 1 0" });

export const TestHarness = ({ widgetsWithIds }: TestHarnessProps) => {
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

  const layout: Layout[] = widgetsWithIds.map((widget) => ({
    i: widget.id,
    x: 0,
    y: 0,
    w: 6,
    h: 9,
    minw: 2,
    minH: 3,
  }));

  const [postLayout, setPostLayout] = useState(layout);
  const [open, setOpen] = useState(false);

  return (
    <FlexBox bgcolor="#999" position="relative">
      <FlexBox overflow="auto">
        <ReactGridLayout
          layout={postLayout}
          onLayoutChange={(newLayout) => {
            if (!_.isEqual(postLayout, newLayout)) {
              setPostLayout(newLayout);
            }
          }}
          cols={10}
          rowHeight={30}
          width={1600}
          draggableHandle={".draggableClass"}
        >
          {widgetsWithIds.map(({ id, title, type, Component }, idx) => (
            <FlexBox
              key={id}
              border="1px solid black"
              bgcolor="#ccc"
              borderRadius="5px"
              boxShadow="0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
            >
              <FlexBox
                overflow="auto"
                height="100%"
                padding="5px"
                boxSizing="border-box"
                textAlign="center"
                display="flex"
                flexDirection="column"
              >
                <Typography className="draggableClass" style={{ margin: "0px", cursor: "all-scroll" }}>
                  {title} (Drag Here)
                </Typography>
                <hr style={{ margin: "6px 0px 10px 0px" }} />
                {type === WidgetType.BASIC ? (
                  <Component
                    getMetadataKeyName={"foo"}
                    getMetadatvalues={["foo"]}
                    setFilteredMetadataValues={(filteredMetadataValues) =>
                      setFilteredMetadataValues(filteredMetadataValues)
                    }
                    size={`${postLayout[idx].h}:${postLayout[idx].w}`}
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
              </FlexBox>
            </FlexBox>
          ))}
        </ReactGridLayout>
      </FlexBox>
      <Box position="absolute" bottom={16} right={16}>
        <SpeedDial
          icon={<SpeedDialIcon />}
          ariaLabel="Foob"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <SpeedDialAction icon={<SpeedDialIcon />} tooltipTitle="Foooooob" tooltipOpen />
          <SpeedDialAction icon={<SpeedDialIcon />} tooltipTitle="Foooooob" tooltipOpen />
        </SpeedDial>
      </Box>
    </FlexBox>
  );
};
