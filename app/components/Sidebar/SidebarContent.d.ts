import * as React from "react";

export interface SidebarContentProps {
  children?: React.ReactNode;
  slim?: boolean;
  collapsed?: boolean;
  animationsDisabled?: boolean;
  pageConfig?: object;
}

export default class SidebarContent extends React.Component<
  SidebarContentProps
> {}
