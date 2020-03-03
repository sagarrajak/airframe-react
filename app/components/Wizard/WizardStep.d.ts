import * as React from "react";

export interface WizardStepProps {
  active?: boolean;
  complete?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
  icon?: React.ReactNode;
  successIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export default class WizardStep extends React.Component<WizardStepProps> {}
