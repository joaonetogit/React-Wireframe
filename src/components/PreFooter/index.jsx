import { ContainerApp, SubTitle, TitleH2 } from '../Application/styles';
import { ButtonCTA } from '../ButtonCta/styles';
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
        <ButtonCTA>Fazer parte da lista de espera</ButtonCTA>
      </ContainerApp>
    </PreFooterSec>
  );
}
