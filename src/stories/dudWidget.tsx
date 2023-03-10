import { Skeleton } from "@material-ui/lab";
import { BasicWidget, WidgetType } from "./Widget.types";

export const dudWidget: BasicWidget = {
  type: WidgetType.BASIC,
  title: "Dud Widget",
  Component: () => (
    <>
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />
    </>
  ),
};
