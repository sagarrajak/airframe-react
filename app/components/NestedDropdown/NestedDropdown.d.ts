import * as React from "react";

export interface NestedDropdownProps {
  tag?: any;
  className?: string;
  children?: React.ReactNode;
}

export default class NestedDropdown extends React.Component<
  NestedDropdownProps
> {
  handleOpen(targetId: any): any;
}
