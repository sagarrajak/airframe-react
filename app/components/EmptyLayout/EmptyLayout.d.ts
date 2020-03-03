import * as React from "react";

export interface EmptyLayoutProps {
  pageConfig: object;
  children: React.ReactNode;
  className?: string;
}

export default class EmptyLayout extends React.Component<EmptyLayoutProps> {}
