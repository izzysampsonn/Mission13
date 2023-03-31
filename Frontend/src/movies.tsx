import React from 'react';
import styles from './movies.module.css';
import { AnyPtrRecord } from 'dns';

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./logo192.png" alt="joelpic" />
        </div>
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{props.title}</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
