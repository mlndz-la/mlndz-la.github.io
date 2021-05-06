import styled, { keyframes, css } from "styled-components";

const flash = keyframes`
  0% {
    filter: invert(.9) opacity(.5);
  }

  50% {
    filter: invert(1);
  }

  100% {
    filter: invert(.9) opacity(.5);
  }
`;
const animation = css`
  animation: ${flash} 3000ms ease-in-out infinite;
`;

const _Dial = styled.img`
  transition: filter 500ms ease, transform 4500ms ease-in-out;
  width: 75px;
  filter: invert(0.9) opacity(0.5);
  outline: none;
  pointer-events: auto;
  transform: rotate(
    ${(props) => (props.rotate === "false" ? "180deg" : "0deg")}
  );
  ${(props) => (props.isFlashing ? animation : "")}
  &:hover {
    cursor: pointer;
    filter: invert(1);
  }
`;

export default _Dial;
