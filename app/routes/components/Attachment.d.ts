import * as React from "react";

export interface AttachmentProps {
  mediaClassName?: React.ReactNode;
  icon?: React.ReactNode;
  iconClassName?: React.ReactNode;
  BgIcon?: React.ReactNode;
  BgIconClassName?: React.ReactNode;
}

export default class Attachment extends React.Component<AttachmentProps> {}
