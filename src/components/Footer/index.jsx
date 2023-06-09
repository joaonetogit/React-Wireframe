import { FooterSec } from './styles';
import LogoFooter from '../../assets/logo-footer.svg';
import LogoBoost from '../../assets/boost.svg';
import LogoInstagram from '../../assets/instagram.svg';
import LogoLinkedin from '../../assets/linkedin.svg';
import LogoYoutube from '../../assets/youtube.svg';
import { Container, TitleH6 } from '../Application/styles';

const Socials = [
  {
    name: 'Instagram',
    link: '#',
    src: LogoInstagram,
  },
  {
    name: 'Linkedin',
    link: '#',
    src: LogoLinkedin,
  },
  {
    name: 'YouTube',
    link: '#',
    src: LogoYoutube,
  },
];

const MenuInstitucional = [
  {
    name: 'Quems somos',
    link: '#',
  },
  {
    name: 'Institucional',
    link: '#',
  },
  {
    name: 'Serviços',
    link: '#',
  },
];

const MenuLinksUteis = [
  {
    name: 'Integração',
    link: '#',
  },
  {
    name: 'Acesso à API',
    link: '#',
  },
  {
    name: 'Trabalhe Conosco',
    link: '#',
  },
];

export function Footer() {
  return (
    <FooterSec>
      <Container>
        <div className="column">
          <main>
            <div className="area-left">
              <img src={LogoFooter} alt="Logo Footer" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                nunc orci, eleifend eu porta eu, viverra.
              </p>
            </div>
            <nav>
              <div className="item">
                <TitleH6>Lista de páginas</TitleH6>
                <ul>
                  {MenuInstitucional &&
                    MenuInstitucional.map((item, index) => {
                      return (
                        <li key={index}>
                          <a href={item.link}>{item.name}</a>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="item">
                <TitleH6>Soluções</TitleH6>

                <ul>
                  {MenuLinksUteis &&
                    MenuLinksUteis.map((item, index) => {
                      return (
                        <li key={index}>
                          <a href={item.link}>{item.name}</a>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="item">
                <TitleH6>Nossas redes sociais</TitleH6>
                <ul>
                  {Socials &&
                    Socials.map((item, index) => {
                      return (
                        <li key={index}>
                          <a href={item.link}>
                            <img src={item.src} alt={`Ícone do ${item.name}`} />
                            <span>{item.name}</span>
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </nav>
          </main>
          <div className="copy">
            <p>
              2023 © Todos os direitos reservados. <strong>Codeboost</strong>
            </p>
            <div className="group">
              <span>Grupo</span> <img src={LogoBoost} alt="Logo Boost" />
            </div>
          </div>
        </div>
      </Container>
    </FooterSec>
  );
}
