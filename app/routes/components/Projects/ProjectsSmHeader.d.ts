import * as React from "react";

export interface ProjectsSmHeaderProps {
  subTitle?: React.ReactNode;
  title?: React.ReactNode;
  subTitleLink?: string;
  linkList?: React.ReactNode;
  linkGrid?: React.ReactNode;
  btnShowKanban?: boolean;
  linkKanban?: React.ReactNode;
}

export default class ProjectsSmHeader extends React.Component<
  ProjectsSmHeaderProps
> {}
