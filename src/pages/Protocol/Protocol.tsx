import React, { useEffect  } from 'react';

import classes from './Protocol.module.scss';

interface ProtocolProps {
  name: string;
}

interface ProtocolState {
  name: string;
}

const Protocol: React.FC<ProtocolProps> = ({ name }) => {
  // Component implementation

  useEffect(() => {
    // Do something when count changes
  }, []);

  return (
    <div className={classes.ProtocolContainer}>
      <div className={classes.bgMain}></div>
      <div className={classes.bgBlur}></div>
      <div className={classes.populated}>
        <div className={classes.widgetWrap}>
          <div className={classes.protocolContent}>
            <h3>Protokol Kesehatan</h3>
            <span className={classes.desc}>Mengingat kondisi pandemi saat ini, kami menghimbau Bapak/Ibu/Saudara/i tamu undangan agar tetap memperhatikan protokol kesehatan dalam rangka upaya pencegahan penyebaran virus Covid-19.</span>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Protocol