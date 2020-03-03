import * as React from "react";

export interface InfoPopoverProps {
  colorId?: string;
  children?: React.ReactNode;
  className?: string;
  tag?: any;
}

export default class InfoPopover extends React.Component<InfoPopoverProps> {}
