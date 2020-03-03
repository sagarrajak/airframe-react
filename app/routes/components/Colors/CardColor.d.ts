import * as React from "react";

export interface CardColorProps {
  cardClass?: React.ReactNode;
  color?: React.ReactNode;
  hex?: React.ReactNode;
  rgba?: React.ReactNode;
  cmyk?: React.ReactNode;
  scss?: React.ReactNode;
}

export default class CardColor extends React.Component<CardColorProps> {}
