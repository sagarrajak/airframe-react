import * as React from "react";

export interface AccordionProps {
  initialOpen?: boolean;
  open?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default class Accordion extends React.Component<AccordionProps> {
  toggleHandler(): any;
  isOpen(): any;
}
