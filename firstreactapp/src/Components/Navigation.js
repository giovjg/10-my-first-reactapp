import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  const [showMenu, setShowMenu] = useState(false)

  let menu

  if (showMenu) {
    menu = <div
    className= "fixed bg-white top-0 w-4/5">
      this is the menu
    </div>
  }
  return (
    <nav>
        <span className="text-xl">
          <FontAwesomeIcon
              icon={faBars} // prop
              onClick={() => setShowMenu(!showMenu)}
          />
        </span>
    </nav>
  );
}

export default Navigation;
