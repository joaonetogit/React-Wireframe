import styled from 'styled-components';

export const CardsSec = styled.section`
  background-color: #050110;
  padding-top: 10.4rem;
  padding-bottom: 12rem;

  .main-area {
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.25);
    padding-bottom: 12.5rem;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        margin-top: 0.8rem;
      }
    }

    .all-cards {
      display: flex;
      justify-content: space-between;
      margin-top: 4.8rem;
    }
  }
`;
