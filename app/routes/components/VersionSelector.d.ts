import * as React from "react";

export interface VersionSelectorProps {
  dashboard?: string;
  down?: boolean;
  compact?: boolean;
  className?: string;
  sidebar?: boolean;
}

export default class VersionSelector extends React.Component<
  VersionSelectorProps
> {
  fetchVersions(): any;
}
