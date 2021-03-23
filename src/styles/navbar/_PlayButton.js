import styled from "styled-components";

const _PlayButton = styled.button`
  border: 0;
  background: transparent;
  box-sizing: border-box;
  width: 0;
  height: 75px;
  transform: scale(.5);
  border-color: transparent transparent transparent rgba(245, 245, 245, 0.5);
  transition: 500ms all ease;
  cursor: pointer;
  // toggle between states
  border-style: ${props => (props.isPlay ? 'double' : 'solid')};
  border-width: ${props => (props.isPlay ? '0px 0 0px 60px' : '37px 0 37px 60px')};
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: transparent transparent transparent rgba(245, 245, 245, 9);
  }
`;

export default _PlayButton;