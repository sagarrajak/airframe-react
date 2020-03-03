import * as React from "react";

export interface ProjectsListProps {
  title?: string;
  badgeColor?: string;
  badgeTitle?: string;
  progressValue?: string;
  completeValue?: string;
  myTasksValue?: string;
  daysDueValue?: string;
}

export default class ProjectsList extends React.Component<ProjectsListProps> {}
