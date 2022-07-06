import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="border-b p-3 flex justify-between">
      <span className ="font-bold">
         Appname
      </span>
      <Navigation/>
    </header>
  );
}

export default Header;
