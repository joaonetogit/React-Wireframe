import { ContainerApp, TitleH1 } from '../Application/styles';
import { ButtonCTA } from '../ButtonCta/styles';
import { Hero } from './styles';
import HeroImage from '../../assets/img-hero.svg';

export function HeroSection() {
  return (
    <Hero>
      <ContainerApp>
        <div className="row">
          <div className="text">
            <TitleH1>Front-end descomplicado e direto ao ponto!</TitleH1>
            <p>
              Aprenda a desenvolver interfaces modernas e de alta qualidade com
              quem está na área atuando com projetos altamente renomados.
            </p>
            <ButtonCTA>Fazer parte da lista de espera</ButtonCTA>
          </div>
          <div className="image">
            <img src={HeroImage} className="animacao" alt="" />
          </div>
        </div>
      </ContainerApp>
    </Hero>
  );
}
