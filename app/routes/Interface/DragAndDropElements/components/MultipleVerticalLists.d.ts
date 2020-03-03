import * as React from "react";

export interface MultipleVerticalListsProps {
  className?: string;
}

export default class MultipleVerticalLists extends React.Component<
  MultipleVerticalListsProps
> {
  onDragEnd(result: any): any;
  recoverInitialState(): any;
}
