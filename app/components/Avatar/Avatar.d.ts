import * as React from "react";

export interface AvatarProps {
  size?: string;
  children: React.ReactNode;
  addOns?: React.ReactNode;
  style?: object;
  className?: string;
}

export default class Avatar extends React.Component<AvatarProps> {}
