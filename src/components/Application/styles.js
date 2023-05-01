import styled from 'styled-components';

export const ContainerApp = styled.div`
  width: 100%;
  max-width: 124.6rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const TitleH1 = styled.h1`
  font-family: 'Sora', sans-serif;
  font-size: 4.8rem;
  color: #050110;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: -0.1rem;
`;
export const TitleH2 = styled.h2`
  font-family: 'Sora', sans-serif;
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: -0.1rem;
  color: #fff;
  margin-bottom: 8px;
`;
export const TitleH3 = styled.h3`
  font-family: 'Sora', sans-serif;
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: -0.1rem;
  margin-bottom: 8px;
  color: #fff;
`;
export const SubTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  opacity: 0.7;
`;

export const ButtonStyled = styled.a`
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
