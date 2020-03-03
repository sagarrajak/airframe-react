import * as React from "react";

export interface ActivityProps {
  iconColorBelow?: React.ReactNode;
  iconBelow?: React.ReactNode;
  iconColor?: React.ReactNode;
  icon?: React.ReactNode;
}

export default class Activity extends React.Component<ActivityProps> {}
