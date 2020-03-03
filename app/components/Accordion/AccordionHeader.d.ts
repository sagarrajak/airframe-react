import * as React from "react";

export interface AccordionHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export default class AccordionHeader extends React.Component<
  AccordionHeaderProps
> {}
