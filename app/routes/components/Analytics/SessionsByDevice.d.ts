import * as React from "react";

export interface SessionsByDeviceProps {
  title?: React.ReactNode;
  titlePercentColor?: React.ReactNode;
  valuePercent?: string;
  valuePercentColor?: React.ReactNode;
  value?: React.ReactNode;
  valueColor?: React.ReactNode;
}

export default class SessionsByDevice extends React.Component<
  SessionsByDeviceProps
> {}
