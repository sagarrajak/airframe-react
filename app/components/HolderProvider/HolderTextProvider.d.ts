import * as React from "react";

export interface HolderTextProviderProps {
  bg?: string;
  fg?: string;
  text?: string;
  width?: number | string;
  height?: number | string;
  font?: string;
  align?: string;
  outline?: boolean;
  lineWrap?: number;
  children?: React.ReactNode;
}

export default class HolderTextProvider extends React.Component<
  HolderTextProviderProps
> {
  initPlaceholder(): any;
}
