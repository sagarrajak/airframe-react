import * as React from "react";

export interface DefAreaValueColorProps {
  positiveColor?: string;
  negativeColor?: string;
  id: string;
  data: any[];
}

export default class DefAreaValueColor extends React.Component<
  DefAreaValueColorProps
> {}
