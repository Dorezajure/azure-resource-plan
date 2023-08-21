import { getYear, getMonth, getDate, format } from "date-fns";

export function getIntervalString(dateStart, dateEnd) {
    const datesStart = new Date(dateStart);
    // 3 переменные для dateStart
    const dayStart = getDate(datesStart);
    const monthStart = getMonth(datesStart);
    const yearStart = getYear(datesStart);

    const datesEnd = new Date(dateEnd);
    // 3 переменные для dateEnd
    const dayEnd = getDate(datesEnd);
    const monthEnd = getMonth(datesEnd);
    const yearEnd = getYear(datesEnd);

    // Все данные равны
    if (
        dayStart === dayEnd &&
        monthStart === monthEnd &&
        yearStart === yearEnd
    ) {
        return format(datesStart, "dd.MM.yy");
    }

    // Разные дни
    if (
        dayStart !== dayEnd &&
        monthStart === monthEnd &&
        yearStart === yearEnd
    ) {
        return format(datesStart, "dd") + "-" + format(datesEnd, "dd.MM.yy");
    }

    // Разные дни и месяцы
    if (
        dayStart !== dayEnd &&
        monthStart !== monthEnd &&
        yearStart === yearEnd
    ) {
        return format(datesStart, "dd.MM") + "-" + format(datesEnd, "dd.MM.yy");
    }

    // Разные года дни и месяцы
    if (
        dayStart !== dayEnd &&
        monthStart !== monthEnd &&
        yearStart !== yearEnd
    ) {
        return (
            format(datesStart, "dd.MM.yy") + "-" + format(datesEnd, "dd.MM.yy")
        );
    }
}

// Функция для вывода дат на основе приходящего массива 
export function getIntervalDate(arr) {
    // массив в который мы передаем начальное и конечное значение 
    let dates = [arr];
    // цикл, проверяющий на основе длинны массива что требуется вывести   
    for (let i = 0; i < dates.length; i++) { 
        if (i < (dates.length - 1)) {
            console.log(dates[0] - dates[dates.length - 1]);
        } else {
            console.log("Увы такой даты нет.");
        }
        }
        return dates;
    }