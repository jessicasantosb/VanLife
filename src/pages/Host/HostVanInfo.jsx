import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './HostVanInfo.module.css';

function HostVanInfo() {
  const { name, type, description } = useOutletContext();

  return (
    <div className={styles.info}>
      <h4>
        Name: <span>{name}</span>
      </h4>
      <h4>
        Category: <span>{type}</span>
      </h4>
      <h4>
        Description: <span>{description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </div>
  );
}

export default HostVanInfo;
