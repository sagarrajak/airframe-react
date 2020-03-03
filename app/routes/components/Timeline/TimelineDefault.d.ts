import * as React from "react";

export interface TimelineDefaultProps {
  showPillDate?: boolean;
  pillDate?: string;
  smallIconColor?: string;
  iconCircleColor?: string;
  iconCircle?: string;
  badgeTitle?: string;
}

export default class TimelineDefault extends React.Component<
  TimelineDefaultProps
> {}
