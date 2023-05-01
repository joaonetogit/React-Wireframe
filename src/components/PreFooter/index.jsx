import {
  ContainerApp,
  SubTitle,
  TitleH2,
  ButtonStyled,
} from '../Application/styles';
import { PreFooterSec } from './styles';

export function PreFooterSection() {
  return (
    <PreFooterSec>
      <ContainerApp>
        <div className="row">
          <TitleH2>Front-end descomplicado e direto ao ponto!</TitleH2>
          <SubTitle>
            Aprenda a desenvolver interfaces modernas e de alta qualidade com
            quem está na área atuando com projetos altamente renomados.
          </SubTitle>
        </div>
        <ButtonStyled href="#">Fazer parte da lista de espera</ButtonStyled>
      </ContainerApp>
    </PreFooterSec>
  );
}
