import * as React from "react";

export interface CardHeaderProps {
  type?: string;
  color?: string;
  className?: string;
}

export default class CardHeader extends React.Component<CardHeaderProps> {}
