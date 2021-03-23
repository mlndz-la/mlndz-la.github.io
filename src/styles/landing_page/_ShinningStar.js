import styled, { css, keyframes } from "styled-components";

const shine = keyframes`
  0% {
    box-shadow: 0px 0px 0px .5px wheat;
    opacity: 0;
  }
  50% {
    box-shadow: 0px 0px 15px 2px wheat;
    opacity: 1;
  }
  100%{
    box-shadow: 0px 0px 0px 0.1px wheat;
    opacity: .1;
  }
`;

const _ShinningStar = styled.div`
  position: absolute;
  border-radius: 100px;
  z-index: 10;
  ${(props) => {
    const { size, top, left, color, blur, delay } = props.star;
    return (
      props.star &&
      css`
      /* size of star  */
      width: ${size};
      height: ${size};
      /* position of star */
      top: ${top};
      left: ${left};
      /* color of star */
      background-color: ${color};
      filter: blur(${blur});
      /* shine keyframe */
      animation: ${shine} ${delay} ease-in-out infinite;
    }`
    );
  }};
`;

export default _ShinningStar;
