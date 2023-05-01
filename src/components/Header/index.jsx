import { ContainerApp } from '../Application/styles';
import { ButtonCTA } from '../ButtonCta/styles';
import { Logo } from '../Logo';
import { MenuItem } from '../MenuItem';
import { HeaderDiv } from './styles';

const MenuHeader = [
  {
    title: 'Saiba mais',
    link: '#',
  },
  {
    title: 'Institucional',
    link: '#',
  },
  {
    title: 'Serviços',
    link: '#',
  },
];

export function Header() {
  return (
    <HeaderDiv>
      <ContainerApp>
        <div className="row">
          <Logo />

          <nav>
            <ul>
              {MenuHeader &&
                MenuHeader.map((item, index) => {
                  return (
                    <li key={index}>
                      <MenuItem link={item.link} title={item.title} />
                    </li>
                  );
                })}
            </ul>
            <ButtonCTA href="#">Call to action</ButtonCTA>
          </nav>

          <div className="menu-mobile">
            <MenuItem link="#" title="Mobile" />
          </div>
        </div>
      </ContainerApp>
    </HeaderDiv>
  );
}
