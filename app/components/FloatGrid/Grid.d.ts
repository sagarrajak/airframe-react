import * as React from "react";

export interface GridProps {
  active?: boolean;
  children?: React.ReactNode;
  fluid?: boolean;
  rowHeight?: number;
  className?: string;
}

export default class Grid extends React.Component<GridProps> {
  _resizeHandler(): any;
}
