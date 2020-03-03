import * as React from "react";

export interface ExtendedDropdownSectionProps {
  children?: React.ReactNode;
  list?: boolean;
  className?: string;
  tag?: any;
}

export default class ExtendedDropdownSection extends React.Component<
  ExtendedDropdownSectionProps
> {}
