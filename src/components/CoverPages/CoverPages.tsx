import React, { useEffect  } from 'react';
import classes from './CoverPages.module.scss';
import { motion } from "framer-motion"

interface CoverPagesProps {
  name: string;
}

interface CoverPagesState {
  name: string;
}

const CoverPages: React.FC<CoverPagesProps> = ({ name }) => {
  // Component implementation

  useEffect(() => {
    // Do something when count changes
  }, []);

  return (
    <aside>
      <motion.div 
        className={classes.CoverPagesContainer} 
        initial={{ width: "calc(100% + 480px)", opacity: 1 }}
        animate={{ width: "100%", opacity: 1 }}
        exit={{ width: "100%", opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <div className={classes.widgetWrap}>
          <h3>You Are Invited!</h3>
          <span className={classes.description}>Bapak/Ibu/Saudara/i</span>
          <span className={classes.guest}>Tamu Undangan</span>
        </div>
        
      </motion.div>
    </aside>

  );
}

export default CoverPages