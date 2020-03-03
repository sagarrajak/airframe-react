import * as React from "react";

export interface SidebarTriggerProps {
  tag?: any;
  children?: React.ReactNode;
  pageConfig?: object;
}

export default class SidebarTrigger extends React.Component<
  SidebarTriggerProps
> {}
