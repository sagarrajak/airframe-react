import * as React from "react";

export interface MetricVsTargetProps {
  title?: React.ReactNode;
  value?: React.ReactNode;
  progressbarValue?: string;
  progressbarColor?: React.ReactNode;
  targetValue?: React.ReactNode;
}

export default class MetricVsTarget extends React.Component<
  MetricVsTargetProps
> {}
