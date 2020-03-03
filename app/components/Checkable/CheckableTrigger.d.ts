import * as React from "react";

export interface CheckableTriggerProps {
  children?: React.ReactNode;
  className?: string;
  tag?: any;
}

export default class CheckableTrigger extends React.Component<
  CheckableTriggerProps
> {}
