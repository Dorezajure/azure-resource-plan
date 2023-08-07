import React from "react";
import "../sass/header.scss";
import Select from "./Select";

const Header = () => {
    return (
        <div className="header">
            <div className="row">
                <Select />
            </div>
        </div>
    );
};

export default Header;
