/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import Menu from '../Menu';

const Header: FC = () => {
  const mobileMediaQuery = useMediaQuery('(max-width: 1023px)');

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <img
          src={
            mobileMediaQuery
              ? '/assets/logos/redradix-symbol.svg'
              : '/assets/logos/redradix-full.svg'
          }
          alt='Redradix logo'
          width='auto'
          height={32}
        />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
