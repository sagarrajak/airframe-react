import * as React from "react";

export interface SidebarMenuProps {
  children?: React.ReactNode;
  currentUrl?: string;
  slim?: boolean;
  location?: object;
  pageConfig?: object;
  disabled?: boolean;
}

export default class SidebarMenu extends React.Component<SidebarMenuProps> {
  addEntry(entry: any): any;
  updateEntry(id: any, stateMods: any): any;
  removeEntry(id: any): any;
  setActiveEntries(openActive: any): any;
}
