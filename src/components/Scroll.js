import React from 'react';

import './Scroll.css';

/* 
    Scroll is element that renders the children 
    and make them scrollable
*/
const Scroll = (props) => {
    return (
        <div className="scrollable">
            {props.children}
        </div>
    );
};

export default Scroll;