import * as React from "react";

export interface CustomPaginationTotalProps {
  from?: number;
  to?: number;
  size?: number;
}

export default class CustomPaginationTotal extends React.Component<
  CustomPaginationTotalProps
> {}
