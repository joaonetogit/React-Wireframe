import { CardDiv } from './styles';
import IconArchive from '../../assets/icon-circle.svg';
import { SubTitle, TitleH3 } from '../Application/styles';

export function Card({ title, subtitle }) {
  return (
    <CardDiv>
      <div className="icon">
        <img src={IconArchive} alt="Ícone do Card" />
      </div>
      <div className="info">
        <TitleH3>{title}</TitleH3>
        <SubTitle>{subtitle}</SubTitle>
      </div>
    </CardDiv>
  );
}
