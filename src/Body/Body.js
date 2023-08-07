import React from "react";
import "../sass/body.scss";
import CenterBlock from "./CenterBlock";
import RightBlock from "./RightBlock";

const Body = () => {
    return (
        <div className="blocks">
            <div>
                <CenterBlock />
            </div>
            <div>
                <RightBlock />
            </div>
        </div>
    );
};

export default Body;
