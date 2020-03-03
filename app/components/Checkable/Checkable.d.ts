import * as React from "react";

export interface CheckableProps {
  children: React.ReactNode;
  tag?: any;
}

export default class Checkable extends React.Component<CheckableProps> {}
