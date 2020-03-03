import * as React from "react";

export interface WizardProps {
  children?: React.ReactNode;
  activeStep?: string;
  initialActiveStep?: string;
}

export default class Wizard extends React.Component<WizardProps> {
  stepClick(id: any): any;
  getActiveStep(): any;
}
