import * as React from "react";

export interface DraggableTableProps {
  className?: string;
}

export default class DraggableTable extends React.Component<
  DraggableTableProps
> {
  onDragEnd({ source, destination }: any): any;
  recoverInitialState(): any;
}
