import styled, { css } from "styled-components";
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from "react-icons/ri";

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 24px;

    > h1 {
      font-size: 26px;
      line-height: 1.25;
      color: #24292e;
      font-weight: 600;
    }
    > h2 {
      font-size: 20px;
      color: #666;
      font-weight: 300;
    }
  }

  // a partir deste tamanho mínimo da tela
  // a div se tornará uma coluna
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

export const Row = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 14px;
      color: #586069;
    }

    > * {
      margin-right: 5px;
    }
  }
`;

export const Avatar = styled.img`
  width: 16%;
  border-radius: 50%;

  // a partir deste tamanho mínimo da tela
  // o avatar de usuário ocupará 100% do espaço disponível
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled.div``;

export const Column = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 14px;

    // a partir do meu segundo item da lista
    // ele terá esta margin top
    li + li {
      margin-top: 10px;
    }
    span {
      margin-left: 5px;

      // se o texto for maior
      // ele ficará com reticências
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: #6a737d;
  flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`
  ${iconCSS}
`;

export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconCSS}
`;

export const BlogIcon = styled(RiLinksLine)`
  ${iconCSS}
`;

export const EmailIcon = styled(RiMailLine)`
  ${iconCSS}
`;

export const LocationIcon = styled(RiMapPin2Line)`
  ${iconCSS}
`;
