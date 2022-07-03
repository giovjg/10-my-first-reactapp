import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

// import {useTransition, animated} from 'react-spring'
// import NavigationMenu from './NavigationMenu'

function Navigation(){
  const [showMenu, setShowMenu] = useState(false);
  return (
      <nav>
          <span className="text-xl">
              <FontAwesomeIcon
                  icon={faBars}
                  onClick={() => setShowMenu(!showMenu)}
              />
          </span>

      </nav>
    )
  }

export default Navigation;
