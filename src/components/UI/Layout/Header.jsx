import React, { useEffect } from "react";

function Header() {
    useEffect(() => {
        // console.log("Компонент смонтирован");

        return () => {
            // console.log("Компонент размонтирован");

            };
        }, []);

    return (
        <div id={"header"}>
            <div className={"picture_title"}><img src="./img/ab6761610000e5ebab47d8dae2b24f5afe7f9d38.jpeg" alt=""/></div>
            <div className={"logo_title"}><img src="./img/Imagine_Dragons_2021_logo%201.svg" alt=""/></div>
        </div>
    );
}

export default Header;