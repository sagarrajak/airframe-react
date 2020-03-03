import * as React from "react";

export interface CardSystemProps {
  title?: React.ReactNode;
  badgeColor?: string;
  unit?: React.ReactNode;
  pieColor?: string;
}

export default class CardSystem extends React.Component<CardSystemProps> {}
