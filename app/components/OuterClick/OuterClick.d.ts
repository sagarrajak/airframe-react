import * as React from "react";

export interface OuterClickProps {
  children?: React.ReactNode;
  excludedElements?: any[];
  active?: boolean;
}

export default class OuterClick extends React.Component<OuterClickProps> {
  assignRef(elementRef: any): any;
  handleDocumentClick(evt: any): any;
}
