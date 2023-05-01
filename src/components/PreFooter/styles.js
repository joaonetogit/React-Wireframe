import styled from 'styled-components';

export const PreFooterSec = styled.section`
  background-color: #1c1d1f;
  padding: 15.2rem 0rem;

  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    margin-bottom: 2rem;
    text-align: center;
  }

  p {
    text-align: center;
    max-width: 69.4rem;
    margin: auto auto 4rem;
    color: rgba(255, 255, 255, 0.7);
  }

  a {
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    padding: 4rem 0;
  }
`;
