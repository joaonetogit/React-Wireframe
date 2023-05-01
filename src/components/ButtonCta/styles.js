import styled from 'styled-components';

export const ButtonCTA = styled.a`
  font-family: 'Sora', sans-serif;
  width: fit-content;
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
  letter-spacing: -0.01em;
  background-color: #f67acb;
  padding: 2rem 4rem;
  font-size: 16px;
  line-height: 100%;
  font-weight: 600;
  color: #050110;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
