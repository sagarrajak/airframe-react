import * as React from "react";

export interface SidebarMenuItemProps {
  entries?: object;
  parentId?: string;
  children?: React.ReactNode;
  isSubNode?: boolean;
  currentUrl?: string;
  slim?: boolean;
  icon?: React.ReactNode;
  title?: string | React.ReactNode;
  to?: string;
  href?: string;
  exact?: boolean;
  noCaret?: boolean;
}

export default class SidebarMenuItem extends React.Component<
  SidebarMenuItemProps
> {
  getEntry(): any;
  toggleNode(): any;
}
