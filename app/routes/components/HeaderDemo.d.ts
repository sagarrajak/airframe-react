import * as React from "react";

export interface HeaderDemoProps {
  no?: string | number;
  title?: string;
  subTitle?: string;
  children?: React.ReactNode;
  className?: string;
}

export default class HeaderDemo extends React.Component<HeaderDemoProps> {}
