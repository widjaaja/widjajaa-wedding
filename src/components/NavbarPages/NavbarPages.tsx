import React, { useEffect  } from 'react';
import classes from './NavbarPages.module.scss';

interface NavbarPagesProps {
  onNavClick: (message: string) => void;
  activeNav: string;
}

interface NavbarPagesState {
  name: string;
}

const NavbarPages: React.FC<NavbarPagesProps> = ({ onNavClick, activeNav }) => {
  // Component implementation
  const handleNavClick = (message: string) => {
    onNavClick(message);
  };

  useEffect(() => {
    // Do something when count changes
  }, []);

  return (
    <div className={classes.NavbarPagesContainer}>
      {/* <h1>NavbarPages</h1> */}
      <div className={classes.NavThumbsContainer}>
        <div onClick={() => handleNavClick('wedding')} className={`${classes.ItemNav} ${activeNav === 'wedding' && classes.Selected}`}>
          <i className="fa-solid fa-rings-wedding"></i>
          <span>Wedding</span>
        </div>
        <div onClick={() => handleNavClick('brides')} className={`${classes.ItemNav} ${activeNav === 'brides' && classes.Selected}`}>
          <i className="fa-solid fa-heart"></i>
          <span>Brides</span>
        </div>
        <div onClick={() => handleNavClick('event')} className={`${classes.ItemNav} ${activeNav === 'event' && classes.Selected}`}>
          <i className="fa-solid fa-calendar-days"></i>
          <span>Event</span>
        </div>
        <div onClick={() => handleNavClick('location')} className={`${classes.ItemNav} ${activeNav === 'location' && classes.Selected}`}>
          <i className="fa-solid fa-map-location-dot"></i>
          <span>Location</span>
        </div>
        <div onClick={() => handleNavClick('protocol')} className={`${classes.ItemNav} ${activeNav === 'protocol' && classes.Selected}`}>
          <i className="fa-solid fa-shield-check"></i>
          <span>Protocol</span>
        </div>
        <div onClick={() => handleNavClick('gifts')} className={`${classes.ItemNav} ${activeNav === 'gifts' && classes.Selected}`}>
          <i className="fa-solid fa-gifts"></i>
          <span>Gifts</span>
        </div>
      </div>
      
    </div>
  );
}

export default NavbarPages