import React, {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
const Modal = ({children}) => {
  const elRef = useRef(document.createElement('div'));
  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    return () => {
    modalRoot.removeChild(elRef.current); 
    };
  }, []);
  return createPortal(
    React.createElement('div', null, children),
    elRef.current
  );
};
export default Modal;
