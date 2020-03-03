import * as React from "react";

export interface HeaderAuthProps {
  icon?: React.ReactNode;
  iconClassName?: React.ReactNode;
  title?: React.ReactNode;
  text?: React.ReactNode;
}

export default class HeaderAuth extends React.Component<HeaderAuthProps> {}
