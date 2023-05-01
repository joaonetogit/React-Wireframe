import { ContainerApp, SubTitle, TitleH2 } from '../Application/styles';
import { ButtonCTA } from '../ButtonCta/styles';
import { ThumbSec } from './styles';
import ThumbArchive from '../../assets/thumb.svg';

export function ThumbSection() {
  return (
    <ThumbSec>
      <ContainerApp>
        <div className="top">
          <div className="title">
            <TitleH2>Título</TitleH2>
            <SubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </SubTitle>
          </div>
          <ButtonCTA>Call to action</ButtonCTA>
        </div>
        <div className="all-images">
          {Array.from({ length: 12 }).map((_, index) => (
            <div className="image" key={index}>
              <img src={ThumbArchive} alt="Imagem da Thumb" />
            </div>
          ))}
        </div>
      </ContainerApp>
    </ThumbSec>
  );
}
