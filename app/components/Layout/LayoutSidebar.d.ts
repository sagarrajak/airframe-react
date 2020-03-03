import * as React from "react";

export interface LayoutSidebarProps {
  children?: React.ReactNode;
  sidebarSlim?: boolean;
  sidebarCollapsed?: boolean;
}

export default class LayoutSidebar extends React.Component<
  LayoutSidebarProps
> {}
