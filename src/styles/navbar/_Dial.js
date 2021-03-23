import styled from "styled-components";

const _Dial = styled.img`
  transition: filter 500ms ease, transform 4500ms ease-in-out;
  width: 75px;
  filter: invert(.9) opacity(.5);
  outline: none;
  transform: rotate(${props => props.rotate === "false" ? "180deg" : "0deg"});
  &:hover {
    cursor: pointer;
    filter: invert(1);
  }
`;

export default _Dial;