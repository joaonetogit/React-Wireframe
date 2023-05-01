import styled from 'styled-components';

export const HeaderDiv = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2.4rem 0;
  background-color: #f7f8fa;
  display: flex;
  z-index: 99;

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu-mobile {
    display: none;
  }

  nav {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      margin-right: 3.2rem;
      gap: 3.2rem;
    }
  }

  @media screen and (max-width: 991px) {
    nav {
      display: none;
    }

    .menu-mobile {
      display: block;
    }
  }
  @media screen and (max-width: 480px) {
    .logo {
      max-width: 13rem;
    }
  }
`;
