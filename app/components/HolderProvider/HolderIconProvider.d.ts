import * as React from "react";

export interface HolderIconProviderProps {
  iconChar: string;
  children?: React.ReactNode;
}

export default class HolderIconProvider extends React.Component<
  HolderIconProviderProps
> {}
