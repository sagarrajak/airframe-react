import * as React from "react";

export interface ThemeProviderProps {
  children?: React.ReactNode;
  initialStyle?: string;
  initialColor?: string;
}

export default class ThemeProvider extends React.Component<ThemeProviderProps> {
  onChangeTheme(themeState: any): any;
}
