import * as React from "react";

export interface HeaderMainProps {
  title?: string;
  subTitle?: React.ReactNode;
  className?: string;
}

export default class HeaderMain extends React.Component<HeaderMainProps> {}
