import * as React from "react";

export interface FooterTextProps {
  year?: React.ReactNode;
  name?: React.ReactNode;
  desc?: React.ReactNode;
}

export default class FooterText extends React.Component<FooterTextProps> {}
