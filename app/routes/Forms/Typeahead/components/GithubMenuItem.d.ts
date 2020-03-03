import * as React from "react";

declare interface User {
  avatar_url: string;
  login: string;
}

export interface GithubMenuItemProps {
  user: User;
}

export default class GithubMenuItem extends React.Component<
  GithubMenuItemProps
> {}
