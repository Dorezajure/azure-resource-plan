import React from "react";
import "../sass/centerblock.scss";

const Cards = (props) => {
    // Получаем с пропсов данные
    const { name, completeWork } = props.project;

    return (
        <div>
            <div className="event start-12 end-1 writing">
                <div>
                    <p className="title">{name}</p>
                    <p className="time">{completeWork} hours</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
