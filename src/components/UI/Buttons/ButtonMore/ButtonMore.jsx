import React from 'react';
import "./ButtonMore.css";


function ButtonMore(props) {
    const handleClick = () => {

    };

    return (
        <button onClick={handleClick} className={"button_more"} style={{ backgroundColor: props.color}}>ЕЩЕ</button>
    )
}

export default ButtonMore;