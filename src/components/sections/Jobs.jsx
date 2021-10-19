import React, { useRef } from 'react';


export default function Jobs() {
  const revealContainer = useRef(null);

  // Focus on tabs when using up & down arrow keys
  // const onKeyDown = e => {
  //   switch (e.key) {
  //     case KEY_CODES.ARROW_UP: {
  //       e.preventDefault();
  //       setTabFocus(tabFocus - 1);
  //       break;
  //     }

  //     case KEY_CODES.ARROW_DOWN: {
  //       e.preventDefault();
  //       setTabFocus(tabFocus + 1);
  //       break;
  //     }

  //     default: {
  //       break;
  //     }
  //   }
  // };

  return (
    <section id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">Dónde he trabajado</h2>

      <div className="inner">
        {/* <div className="tabList" role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)} > */}

        {/* </div> */}
      </div>

    </section >
  );
};
