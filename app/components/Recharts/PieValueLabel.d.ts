import * as React from "react";

export interface PieValueLabelProps {
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  percent?: number;
  color?: string;
}

export default class PieValueLabel extends React.Component<
  PieValueLabelProps
> {}
