import styled from 'styled-components';

export const FooterSec = styled.footer`
  background-color: #050110;
  padding-top: 8.8rem;
  padding-bottom: 3.9rem;

  main {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
    padding-bottom: 7.2rem;

    .area-left {
      max-width: 28.1rem;
      p {
        font-size: 1.4rem;
        line-height: 150%;
        color: rgba(255, 255, 255, 0.7);
        margin-top: 3.5rem;
      }
    }

    nav {
      width: 100%;
      max-width: 77.7rem;
      display: flex;
      justify-content: space-between;

      .item {
        h6 {
          font-family: 'Sora' sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 125%;
          letter-spacing: -1px;
          color: #fff;
          margin-bottom: 2.4rem;
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 3.2rem;
          li {
            a {
              font-family: 'Sora', sans-serif;
              font-weight: 500;
              font-size: 1.4rem;
              line-height: 105%;
              color: rgba(255, 255, 255, 0.7);
              transition: all 0.3s ease-in-out;

              &:hover {
                color: #fff;
              }
            }
          }
        }
      }

      &:last-child {
        ul {
          li {
            a {
              display: flex;
              align-items: center;
              span {
                color: rgba(255, 255, 255, 0.7);
                margin-left: 0.8rem;
              }
            }
          }
        }
      }
    }
  }

  .copy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 3.1rem;
    p,
    span {
      color: rgba(255, 255, 255, 0.7);
    }
    .group {
      display: flex;
      align-items: center;
      span {
        margin-right: 0.8rem;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    main {
      nav {
        max-width: 63rem;
      }
    }
  }

  @media screen and (max-width: 991px) {
    main {
      nav {
        max-width: 45rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    main {
      flex-direction: column;
      align-items: center;

      .area-left {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 4rem;
        p {
          text-align: center;
        }
      }

      nav {
        max-width: 100%;
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 4rem 0;

    main {
      padding-bottom: 4rem;

      nav {
        flex-direction: column;
        align-items: center;

        .item {
          margin-bottom: 4rem;
          ul {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          &:last-child {
            margin-bottom: 0rem;
          }
        }
      }
    }

    .copy {
      flex-direction: column;

      p {
        margin-bottom: 2rem;
      }
    }
  }
`;
