import * as React from "react";

export interface DividerProps {
  position?: string;
  className?: string;
  children?: React.ReactNode;
}

export default class Divider extends React.Component<DividerProps> {}
