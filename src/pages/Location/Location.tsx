import React, { useEffect  } from 'react';

import classes from './Location.module.scss';

interface LocationProps {
  name: string;
}

interface LocationState {
  name: string;
}

const Location: React.FC<LocationProps> = ({ name }) => {
  // Component implementation

  useEffect(() => {
    // Do something when count changes
  }, []);

  return (
    <div className={classes.LocationContainer}>
      <h1>{name}</h1>
    </div>
  );
}

export default Location