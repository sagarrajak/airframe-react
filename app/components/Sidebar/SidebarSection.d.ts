import * as React from "react";

export interface SidebarSectionProps {
  children?: React.ReactNode;
  fluid?: boolean;
  cover?: boolean;
  className?: string;
}

export default class SidebarSection extends React.Component<
  SidebarSectionProps
> {}
