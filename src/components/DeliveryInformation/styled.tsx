import styled from "styled-components";
import { colors } from "../../styles/global";

export const DeliveryContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-area: 2;
  border: 1px solid #b9afaf;
  border-radius: 14px;
  padding: 24px;

  div {
    h2 {
      font-size: 1.6rem;
      margin-bottom: 24px;
    }
  }
  figure {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 280px;
      height: 188px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 1fr;
  align-items: end;
  margin-bottom: 10px;

  label {
    font-size: 1.4rem;
  }

  input {
    outline: none;
    border: none;
    border-bottom: 1px solid ${colors.gray};
    padding-bottom: 4px;
    &:focus {
      border-bottom: 1px solid ${colors.blue};
    }
  }
`;
