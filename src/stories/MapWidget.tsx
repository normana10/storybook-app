import { AdvancedWidget, AdvancedWidgetProps, Widget, WidgetType } from "./Widget.types";

export const MapWidgetComponent = ({}: AdvancedWidgetProps) => (
  <iframe
    src="https://www.openstreetmap.org/export/embed.html?bbox=-77.03772604465486%2C38.88808914463012%2C-77.03407824039459%2C38.890869987700825&amp;layer=mapnik"
    style={{
      border: "1px solid black",
      flexGrow: 1,
    }}
  ></iframe>
);

export const mapWidget = {
  title: "Map Widget",
  type: WidgetType.ADVANCED,
  Component: MapWidgetComponent,
} satisfies AdvancedWidget;
