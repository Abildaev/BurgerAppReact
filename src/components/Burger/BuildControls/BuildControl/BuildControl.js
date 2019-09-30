import React from 'react';
import './BuildControl.css';

const BuildControl = props => {
  return (
      <div className="build-control">
            <div className="label">{props.type}</div>
          <button className="less" onClick={props.removed} disabled={props.disabled}>less</button>
          <button className="more" onClick={props.added}>more</button>
      </div>
  );
};

export default BuildControl;
