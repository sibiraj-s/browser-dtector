import React, { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav: FC = () => {
  const location = useLocation();

  const goToPath = useMemo(() => {
    if (location.pathname.indexOf('ua-parser') === -1) {
      return {
        to: '/ua-parser',
        name: 'Parser',
      };
    }

    return {
      to: '/',
      name: 'Auto Detect',
    };
  }, [location]);

  return (
    <nav className='flex justify-end p-4 fixed w-full z-10'>
      <Link className='text-red-500 underline underline-offset-2' to={goToPath.to}>{goToPath.name}</Link>
    </nav>
  );
};

export default Nav;
