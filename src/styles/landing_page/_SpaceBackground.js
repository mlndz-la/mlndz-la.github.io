import styled from "styled-components";
import space from "../../images/space.jpg";

const _SpaceBackground = styled.div`
  position: relative;
  /* parallax effect */
  width: 100%;
  height: 100vh;
  background: url(${space}) no-repeat center fixed;
  background-size: cover;
`;

export default _SpaceBackground;