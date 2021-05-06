import styled from 'styled-components';

const _Navbar = styled.nav`
  min-width: 10%;
  height: 100vh;
  background-color: transparent;
  position: fixed;
  z-index: 1;
  right: 0%;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    height: 0%;
    flex-direction: row;
    bottom: 5.5%;
  }
`;

export default _Navbar;