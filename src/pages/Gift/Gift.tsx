import React, { useEffect  } from 'react';

import classes from './Gift.module.scss';

interface GiftProps {
  name: string;
}

interface GiftState {
  name: string;
}

const Gift: React.FC<GiftProps> = ({ name }) => {
  // Component implementation

  useEffect(() => {
    // Do something when count changes
  }, []);

  return (
    <div className={classes.GiftContainer}>
      <div className={classes.bgMain}></div>
      <div className={classes.bgBlur}></div>
      <div className={classes.populated}>
        <div className={classes.widgetWrap}>
          <div className={classes.initialContent}>
            <img src="https://invetin.id/wp-content/uploads/2020/12/mahkotaatas1.png" alt="" />
            <span>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do’a restu kepada kami.</span>
            <span className={classes.quote}>
              “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
              <br/>(QS. Ar-Ruum : 21)
            </span>
            <span>Wassalamu’alaikum Warahmatullahi Wabarakatuh Kami yang berbahagia,</span>
            <span className={classes.bridesName}>Fulan & Fulanah</span>
            <span>Kel. Bpk. Abu Fulan & Ibu Fulanah <br/> Kel. Bpk Ahmad Fulan & Ibu Fulanah</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gift