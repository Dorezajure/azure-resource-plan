import { useState } from "react";
import "../sass/centerblock.scss";

const Cards = () => {
    // Создаем состояние
    const [product, setProduct] = useState();

    // Функция чтобы задать рандомное число для часов работы
    const getRandomHours = () => {
        return Math.floor(Math.random() * 40) + 1;
    };

    return (
        <div className="event start-12 end-1 writing">
            <p
                className="title"
                value={product}
                onChange={(e) => {
                    setProduct(e.target.value);
                }}
            ></p>
            <p className="time">{getRandomHours()} hours</p>
        </div>
    );
};

export default Cards;
