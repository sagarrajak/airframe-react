import * as React from "react";

export interface WebsitePerformanceProps {
  title?: React.ReactNode;
  value?: React.ReactNode;
  valuePercentColor?: React.ReactNode;
  valuePercentIcon?: React.ReactNode;
  valuePercent?: React.ReactNode;
}

export default class WebsitePerformance extends React.Component<
  WebsitePerformanceProps
> {}
