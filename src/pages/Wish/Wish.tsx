import React, { useEffect  } from 'react';
import { motion } from "framer-motion";

import classes from './Wish.module.scss';

interface WishProps {
  name: string;
}

interface WishState {
  name: string;
}

const Wish: React.FC<WishProps> = ({ name }) => {
  // Component implementation

  useEffect(() => {
    // Do something when count changes
  }, []);

  return (
    <motion.div  
      className={classes.WishContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className={classes.bgMain}></div>
      <div className={classes.bgBlur}></div>
      <div className={classes.populated}>
        <div className={classes.widgetWrap}>
          <div className={classes.wishContent}>
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Wish