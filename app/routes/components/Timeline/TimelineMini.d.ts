import * as React from "react";

export interface TimelineMiniProps {
  showPillDate?: boolean;
  pillDate?: string;
  icon?: string;
  iconClassName?: string;
  badgeColor?: string;
  badgeTitle?: string;
}

export default class TimelineMini extends React.Component<TimelineMiniProps> {}
