import { SubTitle, TitleH2 } from '../Application/styles';
import { Card } from '../Card';
import { CardsSec } from './styles';

const CardsContent = [
  {
    title: 'Título 1',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc orci, eleifend eu porta eu, viverra non metus.',
  },
  {
    title: 'Título 2',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc orci, eleifend eu porta eu, viverra non metus.',
  },
  {
    title: 'Título 3',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc orci, eleifend eu porta eu, viverra non metus.',
  },
];

export function CardsSection() {
  return (
    <CardsSec>
      <div className="main-area">
        <div className="title">
          <TitleH2>Título</TitleH2>
          <SubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </SubTitle>
        </div>
        <div className="all-cards">
          {CardsContent &&
            CardsContent.map((item, index) => {
              return (
                <Card title={item.title} subtitle={item.subtitle} key={index} />
              );
            })}
        </div>
      </div>
    </CardsSec>
  );
}
