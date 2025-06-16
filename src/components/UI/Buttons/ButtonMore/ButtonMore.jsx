import React from 'react';
import "./ButtonMore.css";

function ButtonMore() {
    const handleClick = () => {
        alert('Не реализовано :)');
    };

    return (
        <button onClick={handleClick} className={"button_more"}>ЕЩЕ</button>
    )
}

export default ButtonMore;