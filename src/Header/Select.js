import React from "react";
import "../sass/body.scss";
import { useRef } from "react";

const Select = () => {
    // useRef
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }
    return (
            <div className="row">
                <select className="select" ref={inputRef}>
                    <option value="All">Все</option>
                    <option value="Александр Морозов">Александр Морозов</option>
                    <option value="Игорь Глухих">Игорь Глухих</option>
                    <option value="Дмитрий Овчинников">
                        Дмитрий Овчинников
                    </option>
                    <option value="Михаил Прологов">Михаил Прологов</option>
                </select>
                <select className="select" ref={inputRef}>
                    <option value="Проект 1">Проект 1</option>
                    <option value="Проект 2">Проект 2</option>
                    <option value="Проект 3">Проект 3</option>
                    <option value="Проект 4">Проект 4</option>
                </select>
                <form className="select" ref={inputRef}>
                        <label htmlFor="fromDate">От: </label>
                        <input type="date" className="fromDate" required="" />
                        <label htmlFor="toDate">До: </label>
                        <input type="date" className="toDate" required="" />
                </form>
                <select className="select" ref={inputRef}>
                    <option value="День">День</option>
                    <option value="Неделя">Неделя</option>
                    <option value="Месяц">Месяц</option>
                </select>
                <button className="button" onClick={() => {handleClick()}}>Получить данные</button>
            </div>
    );
};

export default Select;
