import * as React from "react";

export interface CardFooterInfoProps {
  icon?: React.ReactNode;
  iconClassName?: React.ReactNode;
  text?: React.ReactNode;
}

export default class CardFooterInfo extends React.Component<
  CardFooterInfoProps
> {}
