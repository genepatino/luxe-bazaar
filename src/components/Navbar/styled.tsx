import styled from "styled-components";
import { colors, fonts } from "../../styles/global";

export const NavbarContainer = styled.nav`
  margin-top: 4px;
  padding: 0px 60px 0 26px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  font-weight: bold;

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
        color: gray;
      }
    }

    div {
      display: flex;
    }
  }

  .rigth {
    gap: 40px;
    justify-content: end;
    cursor: pointer;

    .search-icon {
      position: absolute;
      top: 6px;
      right: -10px;
      font-size: 2rem;
      color: gray;
    }

    div {
      display: flex;
      font-size: 1.6rem;
      gap: 2px;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 4px;
      }

      .cart-icon {
        font-size: 1.8rem;
      }
    }

    form {
      width: 100%;
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

  &::placeholder {
    font-family: ${fonts.primary};
  }

  &:focus {
    outline: none;
  }
`;
