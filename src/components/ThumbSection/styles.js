import styled from 'styled-components';

export const ThumbSec = styled.section`
  background-color: #050110;
  padding-bottom: 12rem;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6.4rem;
  }

  .all-images {
    display: flex;
    flex-wrap: wrap;
    gap: 3.2rem;

    .image {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 17.6rem;
      height: 11.2rem;
      background-color: #1c1d1f;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.15);
      }
    }
  }

  @media screen and (max-width: 600px) {
    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .title {
        h2 {
          text-align: center;
          margin-bottom: 0.8rem;
        }

        p {
          text-align: center;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding-top: 4rem;

    .all-images {
      gap: 0.5rem 2%;

      .image {
        width: 49%;
      }
    }

    .title {
      margin-bottom: 3rem;

      .top {
        p {
          margin: 0 auto;
        }
      }
    }
  }
`;
