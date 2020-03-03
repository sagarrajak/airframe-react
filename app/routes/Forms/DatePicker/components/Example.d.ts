import * as React from "react";

export interface ExampleProps {
  exampleInput: React.ReactNode;
  children: string;
  title: string;
  no: React.ReactNode;
}

export default class Example extends React.Component<ExampleProps> {}
