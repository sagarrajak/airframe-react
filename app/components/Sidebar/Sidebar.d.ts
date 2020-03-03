import * as React from "react";

export interface SidebarProps {
  children?: React.ReactNode;
  slim?: boolean;
  collapsed?: boolean;
  animationsDisabled?: boolean;
  pageConfig?: object;
}

export default class Sidebar extends React.Component<SidebarProps> {}
