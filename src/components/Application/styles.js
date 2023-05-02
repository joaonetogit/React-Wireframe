import styled from 'styled-components';

const FONT_SORA = "font-family: 'Sora', sans-serif;";
const FONT_INTER = "font-family: 'Inter', sans-serif;";
const COLOR_WHITE = 'color: #FFFFFF';
const COLOR_BLACK = 'color: #050110';

export const ContainerApp = styled.div`
  width: 100%;
  max-width: 124.6rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const BaseTitle = styled.div`
  ${FONT_SORA}
  font-weight: 600;
  line-height: 125%;
  letter-spacing: -0.1rem;
  margin-bottom: 8px;
`;

export const TitleH1 = styled.h1`
  ${BaseTitle}
  ${COLOR_BLACK}
  font-size: 4.8rem;
`;

export const TitleH2 = styled.h2`
  ${BaseTitle}
  ${COLOR_WHITE}
  font-size: 3.2rem;
`;

export const TitleH3 = styled.h3`
  ${BaseTitle}
  ${COLOR_WHITE}
  font-size: 2.4rem;
`;

export const SubTitle = styled.p`
  ${FONT_INTER}
  ${COLOR_WHITE}
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  opacity: 0.7;
`;

export const ButtonStyled = styled.a`
  ${FONT_SORA}
  ${COLOR_BLACK}
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
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
