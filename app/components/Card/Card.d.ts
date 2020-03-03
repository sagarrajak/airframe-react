import * as React from "react";

export interface CardProps {
  type?: string;
  color?: string;
}

export default class Card extends React.Component<CardProps> {}
