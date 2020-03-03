import * as React from "react";

export interface NavbarThemeProviderProps {
  children: React.ReactNode;
  style?: string;
  color?: string;
}

export default class NavbarThemeProvider extends React.Component<
  NavbarThemeProviderProps
> {}
