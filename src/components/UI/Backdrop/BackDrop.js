import React from 'react';
import './BackDrop.css';

const BackDrop = (props) => {
    return (
        props.show ? <div className="Backdrop"></div> : null
    );
};

export default BackDrop;
