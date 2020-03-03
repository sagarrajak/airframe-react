import * as React from "react";

export interface UncontrolledTabsProps {
  children: React.ReactNode;
  initialActiveTabId?: string;
}

export default class UncontrolledTabs extends React.Component<
  UncontrolledTabsProps
> {}
