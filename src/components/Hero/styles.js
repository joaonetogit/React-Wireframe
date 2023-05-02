import styled from 'styled-components';

export const Hero = styled.section`
  padding: 7.2rem 0;
  margin-top: 8.8rem;

  .text {
    width: 100%;
    max-width: 64rem;
    h1 {
      margin-bottom: 2rem;
    }

    p {
      width: 100%;
      max-width: 48.8rem;
      margin-bottom: 5.6rem;
      font-size: 1.8rem;
      line-height: 150%;
      color: #393c40;
    }

    a {
      padding: 1.7rem 3.7rem;
    }
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 48.8rem;
    height: 49.6rem;
    background-color: #f7f8fa;
  }

  @media screen and (max-width: 1200px) {
    .text {
      max-width: 49%;
    }
  }

  @media screen and (max-width: 991px) {
    .row {
      flex-direction: column;

      .text {
        max-width: 100%;
        margin-bottom: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1,
        p {
          text-align: center;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 4rem 0;

    .text {
      p {
        margin-bottom: 3rem;
      }
    }

    .image {
      height: 30rem;

      img {
        max-width: 10rem;
      }
    }
  }
`;
