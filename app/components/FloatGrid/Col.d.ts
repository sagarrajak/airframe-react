import * as React from "react";

export interface ColProps {
  active?: boolean;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  xl?: number;
  xlH?: number;
  lgH?: number;
  mdH?: number;
  smH?: number;
  xsH?: number;
  xlX?: number;
  lgX?: number;
  mdX?: number;
  smX?: number;
  xsX?: number;
  xlY?: number;
  lgY?: number;
  mdY?: number;
  smY?: number;
  xsY?: number;
  trueSize?: object;
  children?: React.ReactNode;
  className?: string;
}

export default class Col extends React.Component<ColProps> {}
