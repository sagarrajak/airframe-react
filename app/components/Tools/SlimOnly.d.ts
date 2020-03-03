import * as React from "react";

export interface SlimOnlyProps {
  children: React.ReactNode;
  pageConfig?: object;
}

export default class SlimOnly extends React.Component<SlimOnlyProps> {}
