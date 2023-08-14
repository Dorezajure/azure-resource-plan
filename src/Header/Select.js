import React from "react";
import "../sass/body.scss";
import { useRef } from "react";
import { eachDayOfInterval, eachWeekOfInterval, eachMonthOfInterval } from 'date-fns';

const Select = () => {
    // useRef
    // Для каждого элемента свой реф 
    const nameRef = useRef(null);
    const projectRef = useRef(null);
    const dateStartRef = useRef(null);
    const dateEndRef = useRef(null);
    const dayRef = useRef(null);

    const handleClick = () => {
        if(dayRef.current?.value === "День"){
            // В рассмотрении по дням 
            return console.log(eachDayOfInterval({
                start: new Date(dateStartRef.current?.value),
                end: new Date(dateEndRef.current?.value)
            }));
        }
        if(dayRef.current?.value === "Неделя"){
            // В рассмотрении по неделям 
            return console.log(eachWeekOfInterval({
                start: new Date(dateStartRef.current?.value),
                end: new Date(dateEndRef.current?.value)
            }));
        }
        if(dayRef.current?.value === "Месяц"){
            // В рассмотрении по месяцам  
            return console.log(eachMonthOfInterval({
                start: new Date(dateStartRef.current?.value),
                end: new Date(dateEndRef.current?.value)
            }));
        }
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
                <div className="select">
                        <label htmlFor="fromDate">От: </label>
                        <input type="date" className="fromDate" required=""  ref={dateStartRef}/>
                        <label htmlFor="toDate">До: </label>
                        <input type="date" className="toDate" required="" ref={dateEndRef}/>
                </div>
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
