import * as React from "react";

export interface NavbarProps {
  themed?: boolean;
  fluid?: boolean;
  shadow?: boolean;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  dark?: boolean;
  light?: boolean;
}

export default class Navbar extends React.Component<NavbarProps> {}
