import {
  Container,
  SubTitle,
  TitleH2,
  ButtonStyled,
} from '../Application/styles';
import { ThumbSec } from './styles';
import ThumbArchive from '../../assets/thumb.svg';

export function ThumbSection() {
  return (
    <ThumbSec>
      <Container>
        <div className="top">
          <div className="title">
            <TitleH2>Título</TitleH2>
            <SubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </SubTitle>
          </div>
          <ButtonStyled href="#">Call to action</ButtonStyled>
        </div>
        <div className="all-images">
          {Array.from({ length: 12 }).map((_, index) => (
            <div className="image" key={index}>
              <img src={ThumbArchive} alt="Imagem da Thumb" />
            </div>
          ))}
        </div>
      </Container>
    </ThumbSec>
  );
}
