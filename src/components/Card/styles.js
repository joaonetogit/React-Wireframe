import styled from 'styled-components';

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 38.4rem;
  height: 38.2rem;
  background-color: rgba(28, 29, 31, 0.5);
  padding: 6.4rem 4.8rem 8rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  .info {
    margin-top: 4rem;

    h3,
    p {
      text-align: center;
      line-height: 150%;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 32%;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
    max-width: 100%;
    height: auto;
    padding: 3rem;
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }

    .info {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;
