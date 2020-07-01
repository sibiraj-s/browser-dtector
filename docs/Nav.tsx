import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = (): JSX.Element => {
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
    <nav className="nav">
      <Link className="text-crimson" to={goToPath.to}>{goToPath.name}</Link>
    </nav>
  );
};

export default Nav;
