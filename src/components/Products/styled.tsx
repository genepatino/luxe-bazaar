import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 40px 0px;
  padding: 0 60px;
  display: grid;
  gap: 20px;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
`;
