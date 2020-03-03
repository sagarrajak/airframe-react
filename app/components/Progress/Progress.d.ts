import * as React from "react";

export interface ProgressProps {
  slim?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default class Progress extends React.Component<ProgressProps> {}
