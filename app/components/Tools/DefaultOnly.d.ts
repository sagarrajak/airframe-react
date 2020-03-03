import * as React from "react";

export interface DefaultOnlyProps {
  children: React.ReactNode;
  pageConfig?: object;
}

export default class DefaultOnly extends React.Component<DefaultOnlyProps> {}
