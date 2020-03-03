import * as React from "react";

export interface LayoutProps {
  children?: React.ReactNode;
  sidebarSlim?: boolean;
  location?: object;
  favIcons?: any[];
}

export default class Layout extends React.Component<LayoutProps> {
  updateLayoutOnScreenSize(screenSize: any): any;
  updateNavbarsPositions(): any;
  toggleSidebar(): any;
  setElementsVisibility(elements: any): any;
}
