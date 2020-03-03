import * as React from "react";

export interface AvatarFontProps {
  children?: React.ReactNode;
  bgColor?: string;
  fgColor?: string;
  bgColorCustom?: string;
  fgColorCustom?: string;
}

export default class AvatarFont extends React.Component<AvatarFontProps> {}
