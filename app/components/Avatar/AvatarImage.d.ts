import * as React from "react";

export interface AvatarImageProps {
  src: string;
  placeholder?: React.ReactNode;
  alt?: string;
  className?: string;
}

export default class AvatarImage extends React.Component<AvatarImageProps> {}
