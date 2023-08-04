import { useState } from "react";
import '../sass/body.scss';
const Select = () => {
    // Работа с состоянием 
    const [value, setValue] = useState();

    // Получаем значение
    const handleChange = (event) => setValue(event.target.value);

    return ( 
        <div className="header">
            <div className="row">
                <select className="select" onChange={handleChange}>
                <option value="All">Все</option>
                    <option value="Александр Морозов">Александр Морозов</option>
                    <option value="Игорь Глухих">Игорь Глухих</option>
                    <option value="Дмитрий Овчинников">Дмитрий Овчинников</option>
                    <option value="Михаил Прологов">Михаил Прологов</option>
                </select>
                <select className="select">
                        <option value="Проект 1">Проект 1</option>
                        <option value="Проект 2">Проект 2</option>
                        <option value="Проект 3">Проект 3</option>
                        <option value="Проект 4">Проект 4</option>
                </select>
                <form className="select">
                    <input type="date" list="dateList" id="dateInput"/>
                </form>
                <select className="select">
                    <option value="День">День</option>
                    <option value="Неделя">Неделя</option>
                    <option value="Месяц">Месяц</option>
                </select>
            </div>
        </div>
    );
}

export default Select;