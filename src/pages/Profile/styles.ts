import styled from "styled-components";
import { RiBookMarkLine } from "react-icons/ri";

export const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;
  padding-bottom: 24px;

  overflow: hidden;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  padding: 0 16px;

  // a partir de um tamanho mínimo da tela
  // a largura terá 25% do comprimento total
  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.div`
  padding: 0 16px;

  // a partir de um tamanho mínimo da tela
  // a largura terá 75% do comprimento total
  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const Repos = styled.div`
  margin-top: 24px;

  > h2 {
    font-size: 16px;
    font-weight: normal;
  }
  > div {
    margin-top: 8px;

    display: grid;
    grid-gap: 16px;

    grid-template-columns: 1fr;

    // a partir deste tamanho mínimo de tela
    // a coluna única dos repositórios se torna
    // uma coluna dupla
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      // abaixo força que os dois lados se espelhem em altura
      // obs: opcional
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;

export const CalendarHeading = styled.span`
  font-size: 16px;
  margin: 36px 0 9px;
  display: inline-flex;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const Tab = styled.div`
  background: #fff;

  .content {
    display: flex;
    align-items: center;
    width: min-content;

    padding: 14px 16px;
    border-bottom: 2px solid #f9826c;

    .label {
      font-size: 14px;
      padding: 0 7px;
      font-weight: 600;
    }
    .number {
      font-size: 12px;
      background: rgba(209, 213, 218, 0.5);
      padding: 2px 6px;
      border-radius: 24px;
    }
  }
  .line {
    display: flex;
    width: 200vw;
    border-bottom: 1px solid #e1e4e8;
    margin-left: -50vw;
  }

  &.mobile {
    margin-top: 24px;

    .content {
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
  &.desktop {
    display: none;

    @media (min-width: 768px) {
      display: unset;

      .line {
        margin-bottom: 24px;
      }
      .wrapper {
        display: flex;
        margin: 0 auto;
        max-width: 1280px;
      }

      .offset {
        width: 25%;
        margin-right: 16px;
      }
    }
  }
`;
