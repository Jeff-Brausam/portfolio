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

// Trap focusing edits below .... 

// import React, {useEffect, useRef} from 'react';
// import {createPortal} from 'react-dom';
// const Modal = ({children}) => {
//   const elRef = useRef(document.createElement('div'));
//     useEffect(() => {
//     const modalRoot = document.getElementById('modal');
//     // edit later -- trap focusing
//     // const focusableElements =
//     // 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
//     // const focusableContent = elRef.current.querySelectorAll(focusableElements);
//     // const firstFocusableElement = focusableContent[0];
//     // const lastFocusableElement = focusableContent[focusableContent.length - 1];
//     //   console.log(lastFocusableElement);
      
//     // document.addEventListener('keydown', function(e) {
//     //   let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
//     //   if (!isTabPressed) {
//     //     return;
//     //   }
//     //   if (e.shiftKey) {
//     //     if (document.activeElement === firstFocusableElement) {
//     //       lastFocusableElement.focus();
//     //       e.preventDefault();
//     //     }
//     //   } else {
//     //     if (document.activeElement === lastFocusableElement) {
//     //       firstFocusableElement.focus();
//     //       e.preventDefault();
//     //     }
//     //   }
//     // })
//     if (!modalRoot) {
//       return;
//     }
//     modalRoot.appendChild(elRef.current);
//     return () => {
//     modalRoot.removeChild(elRef.current);
//     };
//     }, []);
//   return createPortal(
//     React.createElement('div', null, children),
//     elRef.current
//   );
// };
// export default Modal;
