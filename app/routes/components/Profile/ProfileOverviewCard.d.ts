import * as React from "react";

export interface ProfileOverviewCardProps {
  title?: React.ReactNode;
  badgeColor?: React.ReactNode;
  badgeTitle?: React.ReactNode;
  value?: React.ReactNode;
  valueTitle?: React.ReactNode;
  footerTitle?: React.ReactNode;
  footerTitleClassName?: React.ReactNode;
  footerIcon?: React.ReactNode;
  footerValue?: React.ReactNode;
}

export default class ProfileOverviewCard extends React.Component<
  ProfileOverviewCardProps
> {}
