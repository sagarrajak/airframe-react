import * as React from "react";

export interface EmptyLayoutSectionProps {
  className?: string;
  children: React.ReactNode;
  center?: boolean;
  width?: number | string;
}

export default class EmptyLayoutSection extends React.Component<
  EmptyLayoutSectionProps
> {}
