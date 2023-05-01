import { Children } from 'react';
import { ButtonCTA } from './styles';

export function ButtonCta({ link }) {
  return <ButtonCTA href={link}>{Children}</ButtonCTA>;
}
