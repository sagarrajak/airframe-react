import * as React from "react";

export interface RowProps {
  children?: React.ReactNode;
  columns?: object;
  rowHeight?: number;
  gridSize?: object;
}

export default class Row extends React.Component<RowProps> {
  _updateTrueColSizes(layout: any): any;
  _findClosestBreakpoint(breakpoint: any, definition: any): any;
  _calculateLayouts(children: any): any;
  _transformForChangeHandler(layouts: any): any;
}
