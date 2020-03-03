import * as React from "react";

export interface CustomExportCSVProps {
  size?: string;
  outline?: boolean;
  children?: React.ReactNode;
}

export default class CustomExportCSV extends React.Component<
  CustomExportCSVProps
> {}
