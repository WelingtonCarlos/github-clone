import React from "react";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"welington.carlos"}
            name={"Welington Carlos"}
            avatarUrl={"https://avatars.githubusercontent.com/u/38169533?v=4"}
            followers={465}
            following={54}
            company={"Neo Developer"}
            location={"Maranhão, Brazil"}
            email={"wcfilho98@hotmail.com"}
            blog={"linkedin.com/in/welington-carlos-b3825a153"}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"welington.carlos"}
                  reponame={"github-content"}
                  description={"Contains all of my codes"}
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={13}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>Random content calendar</CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
