import * as React from "react";

export interface StarRatingProps {
  className?: string;
  max?: number;
  at?: number;
  starColor?: string;
}

export default class StarRating extends React.Component<StarRatingProps> {}
