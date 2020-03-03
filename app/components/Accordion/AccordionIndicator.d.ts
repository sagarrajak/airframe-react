import * as React from "react";

export interface AccordionIndicatorProps {
  open?: React.ReactNode;
  closed?: React.ReactNode;
  className?: string;
}

export default class AccordionIndicator extends React.Component<
  AccordionIndicatorProps
> {}
