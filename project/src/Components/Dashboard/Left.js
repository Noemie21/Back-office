import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

export default function Left() {
  const pen = <FontAwesomeIcon icon={faPen} />;
  const trash = <FontAwesomeIcon icon={faTrashCan} />;
  return (
    <div className="box">
      <div className="flex flew-between">
        <p>8 task completed out of 10</p>
        <p className="filter">
          Show:
          <span>This week</span>
        </p>
      </div>
      <div>
        <h1>{pen}</h1>
        <h1>{trash}</h1>
      </div>
    </div>
  );
}
