import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { player01, player02 } from '../assets';
import styles from '../styles';

const GameLoad = () => {
  const { account } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <div className={`${styles.flexBetween} ${styles.gameLoadContainer}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col`}>
        <h1 className={`${styles.headText} text-center`}>
          Waiting for a <br /> worthy opponent...
        </h1>
        <p className={styles.gameLoadText}>
          Protip: while you're waiting, choose your preferred battleground
        </p>
      </div>
      <div className={styles.gameLoadPlayersBox}>
          <div className={`${styles.flexCenter} flex-col`}>
            <img src={player01} className={styles.gameLoadPlayerImg} />
            <p className={styles.gameLoadPlayerText}>
              {account.slice(0, 30)}
            </p>
          </div>

          <h2 className={styles.gameLoadVS}>Vs</h2>

          <div className={`${styles.flexCenter} flex-col`}>
            <img src={player02} className={styles.gameLoadPlayerImg} />
            <p className={styles.gameLoadPlayerText}>??????????</p>
          </div>
        </div>
    </div>
  );
};

export default GameLoad;