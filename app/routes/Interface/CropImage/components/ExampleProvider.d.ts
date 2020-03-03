import * as React from "react";

export interface ExampleProviderProps {
  cropProps?: object;
  src: React.ReactNode;
  initialPosition?: object;
}

export default class ExampleProvider extends React.Component<
  ExampleProviderProps
> {
  _crop(): any;
  _reset(): any;
}
