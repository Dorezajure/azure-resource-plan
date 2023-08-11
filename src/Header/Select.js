import React from "react";
import "../sass/body.scss";
import { useRef } from "react";

const Select = () => {
    // useRef
    // Для каждого элемента свой реф 
    const nameRef = useRef(null);
    const projectRef = useRef(null);
    const dateRef = useRef(null);
    const dayRef = useRef(null);

    const handleClick = () => {
        // Выполнить часть после вопросительного знака только в том случае если не undefined
        console(nameRef.current?.value());
        console(projectRef.current?.value());
        console(dateRef.current?.value());
        console(dayRef.current?.value());
    }

    return (
            <div className="row">
                <select className="select" ref={nameRef}>
                    <option value="All">Все</option>
                    <option value="Александр Морозов">Александр Морозов</option>
                    <option value="Игорь Глухих">Игорь Глухих</option>
                    <option value="Дмитрий Овчинников">
                        Дмитрий Овчинников
                    </option>
                    <option value="Михаил Прологов">Михаил Прологов</option>
                </select>
                <select className="select" ref={projectRef}>
                    <option value="Проект 1">Проект 1</option>
                    <option value="Проект 2">Проект 2</option>
                    <option value="Проект 3">Проект 3</option>
                    <option value="Проект 4">Проект 4</option>
                </select>
                <form className="select" ref={dateRef}>
                        <label htmlFor="fromDate">От: </label>
                        <input type="date" className="fromDate" required="" />
                        <label htmlFor="toDate">До: </label>
                        <input type="date" className="toDate" required="" />
                </form>
                <select className="select" ref={dayRef}>
                    <option value="День">День</option>
                    <option value="Неделя">Неделя</option>
                    <option value="Месяц">Месяц</option>
                </select>
                <button className="button" onClick={() => {handleClick()}}>Получить данные</button>
            </div>
    );
};

export default Select;
