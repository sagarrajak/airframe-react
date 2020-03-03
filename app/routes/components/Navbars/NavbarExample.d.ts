import * as React from "react";

export interface NavbarExampleProps {
  navStyle?: "pills" | "accent" | "default";
  themeStyle?: string;
  themeColor?: string;
}

export default class NavbarExample extends React.Component<
  NavbarExampleProps
> {}
