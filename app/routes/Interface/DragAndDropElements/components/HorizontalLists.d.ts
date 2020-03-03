import * as React from "react";

export interface HorizontalListsProps {
  className?: string;
}

export default class HorizontalLists extends React.Component<
  HorizontalListsProps
> {
  onDragEnd(result: any): any;
  recoverInitialState(): any;
}
