import styled from "styled-components";

const _Mail = styled.img`
  transition: filter 500ms ease, transform 4500ms ease-in-out;
  filter: invert(.9) opacity(.5);
  pointer-events: auto;
  outline: none;
  width: 3rem;
  &:hover {
    cursor: pointer;
    filter: invert(1);
  }
`;

export default _Mail;