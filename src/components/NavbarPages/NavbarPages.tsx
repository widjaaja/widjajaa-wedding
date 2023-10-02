import React, { useEffect  } from 'react';
import classes from './NavbarPages.module.scss';

interface NavbarPagesProps {
  name: string;
}

interface NavbarPagesState {
  name: string;
}

const NavbarPages: React.FC<NavbarPagesProps> = ({ name }) => {
  // Component implementation

  useEffect(() => {
    // Do something when count changes
  }, []);

  return (
    <div className={classes.NavbarPagesContainer}>
      {/* <h1>NavbarPages</h1> */}
      <div className={classes.NavThumbsContainer}>
        <div className={`${classes.ItemNav} ${classes.Selected}`}>
          <i className="fa-solid fa-rings-wedding"></i>
          <span>Wedding</span>
        </div>
        <div className={classes.ItemNav}>
          <i className="fa-solid fa-heart"></i>
          <span>Brides</span>
        </div>
        <div className={classes.ItemNav}>
          <i className="fa-solid fa-calendar-days"></i>
          <span>Event</span>
        </div>
        <div className={classes.ItemNav}>
          <i className="fa-solid fa-map-location-dot"></i>
          <span>Location</span>
        </div>
        <div className={classes.ItemNav}>
          <i className="fa-solid fa-shield-check"></i>
          <span>Protocol</span>
        </div>
        <div className={classes.ItemNav}>
          <i className="fa-solid fa-gifts"></i>
          <span>Gifts</span>
        </div>
      </div>
      
    </div>
  );
}

export default NavbarPages