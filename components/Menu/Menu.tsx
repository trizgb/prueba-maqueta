import { FC, useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

const Menu: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const mobileMediaQuery = useMediaQuery('(max-width: 1023px)');

  const handleClick = () => {
    setIsActive(!isActive);
    setShowMenu(!showMenu);
  };

  return (
    <div className='menu'>
      <button
        type='button'
        className={`hamburger ${isActive ? 'is-active' : ''}`}
        onClick={handleClick}
        tabIndex={0}
      >
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </button>
      {((showMenu && mobileMediaQuery) || !mobileMediaQuery) && (
        <nav className='menu__nav'>
          <ul className='menu__nav-list'>
            <li className='menu__nav-list__item'>
              <a href='#'>Quiénes somos</a>
            </li>
            <li className='menu__nav-list__item'>
              <a href='#'>Servicios</a>
            </li>
            <li className='menu__nav-list__item'>
              <a href='#'>Equipo</a>
            </li>
            <li className='menu__nav-list__item'>
              <a href='#'>Contacto</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Menu;
