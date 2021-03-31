import styled from "styled-components";

const _Mail = styled.img`
  transition: filter 500ms ease, transform 4500ms ease-in-out;
  width: 75px;
  filter: invert(.9) opacity(.5);
  outline: none;
  width: 3.2rem;
  &:hover {
    cursor: pointer;
    filter: invert(1);
  }
`;

export default _Mail;