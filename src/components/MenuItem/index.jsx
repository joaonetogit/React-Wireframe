import { ButtonMenu } from './styles';

export function MenuItem({ link, title }) {
  return (
    <>
      <ButtonMenu href={link}>{title}</ButtonMenu>
    </>
  );
}
