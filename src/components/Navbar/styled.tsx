import styled from "styled-components";
import { colors } from "../../styles/global";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  padding: 0px 60px 0 26px;
`;
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  flex-wrap: wrap;

  .container {
    display: flex;
    place-items: center;

    figure {
      margin: 0;
      width: 130px;
      height: 50px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    ul {
      margin: 0;
      font-size: 1.6rem;
      display: flex;
      gap: 20px;

      li {
        list-style: none;

        a {
          text-decoration: none;
          color: black;

          &:hover {
            text-decoration: underline;
            text-underline-offset: 4px;
          }
        }
      }

      .active {
        color: ${colors.gray};
        text-decoration: underline;
        text-underline-offset: 4px;
      }
    }

    div {
      display: flex;
    }
  }

  .rigth {
    gap: 20px;
    justify-content: end;
    cursor: pointer;
    padding-left: 24px;

    .search-icon {
      position: absolute;
      top: 6px;
      right: 12px;
      font-size: 2rem;
      color: gray;
    }

    a {
      text-decoration: none;
      color: black;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 4px;
      }
    }
    .active {
      color: ${colors.gray};
      text-decoration: underline;
      text-underline-offset: 4px;
    }
    div {
      display: flex;
      font-size: 1.6rem;
      gap: 2px;

      span:nth-child(1) {
        &:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }
      }
      .cart-icon {
        font-size: 1.8rem;
      }
    }

    form {
      width: 300px;
      position: relative;
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 32px;
  padding-left: 20px;
  background: ${colors.lightgray};
  border: none;
  border-radius: 30px;
  font-size: 1.4rem;
  transition: 0.2s;

  &:focus {
    outline: none;
  }
`;

export const ProductsPanelContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: end;
`;
