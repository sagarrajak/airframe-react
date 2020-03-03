import * as React from "react";

export interface IconWithBadgeProps {
  badge?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export default class IconWithBadge extends React.Component<
  IconWithBadgeProps
> {}
