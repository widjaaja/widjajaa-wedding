import React, { useEffect  } from 'react';
import { motion } from "framer-motion";

import classes from './Event.module.scss';

interface EventProps {
  name: string;
}

interface EventState {
  name: string;
}

const Event: React.FC<EventProps> = ({ name }) => {
  // Component implementation

  useEffect(() => {
    // Do something when count changes
  }, []);

  return (
    <motion.div  
      className={classes.EventContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className={classes.WidgetContainer}>
        <div className={classes.bgMain}></div>
        <div className={classes.bgBlur}></div>
        <div className={classes.populated}>
          <div className={classes.widgetWrap}>
            <img className={classes.flower} src="https://invetin.id/wp-content/uploads/2021/03/bouquet.png" alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Event