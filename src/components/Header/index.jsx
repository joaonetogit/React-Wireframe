import { Container, ButtonStyled, Row } from '../Application/styles';
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
      <Container>
        <Row>
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
            <ButtonStyled href="#">Call to action</ButtonStyled>
          </nav>

          <div className="menu-mobile">
            <MenuItem link="#" title="Mobile" />
          </div>
        </Row>
      </Container>
    </HeaderDiv>
  );
}
