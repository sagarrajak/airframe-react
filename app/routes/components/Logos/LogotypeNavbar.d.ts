import * as React from "react";

export interface LogotypeNavbarProps {
  logoH?: React.ReactNode;
  logotype?: React.ReactNode;
  version?: React.ReactNode;
}

export default class LogotypeNavbar extends React.Component<
  LogotypeNavbarProps
> {}
