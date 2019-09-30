import React from 'react';
import './Modal.css';
import BackDrop from "../Backdrop/BackDrop";

const Modal = (props) => {
    return (
        <div>
            <BackDrop show={props.show}/>
            <div className='Modal' style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                {props.children}
            </div>
        </div>


    );
};

export default Modal;
