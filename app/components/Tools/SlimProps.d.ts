import * as React from "react";

export interface SlimPropsProps {
  children?: React.ReactNode;
  pageConfig?: object;
  slimProps?: object;
  defaultProps?: object;
}

export default class SlimProps extends React.Component<SlimPropsProps> {}
