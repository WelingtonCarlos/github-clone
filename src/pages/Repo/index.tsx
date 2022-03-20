import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  LinkButton,
  Stats,
  StarIcon,
  ForkIcon,
  GithubIcon,
  RepoIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={"username"} to={"/welingtoncarlos"}>
          welington.filho
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={"welingtoncarlos/github-clone"}>
          Github-Clone
        </Link>
      </Breadcrumb>

      <p>Contains all of my Github code</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>13</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/WelingtonCarlos/github-clone"}>
        <GithubIcon />
        <span>View On Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
