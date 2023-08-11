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
    if(dayStart === dayEnd && monthStart === monthEnd && yearStart === yearEnd){
        return format(datesStart, "dd.MM.yy");
    }

    // Разные дни 
    if(dayStart !== dayEnd && monthStart === monthEnd && yearStart === yearEnd){
        return format(datesStart, "dd") + "-" + format(datesEnd, "dd.MM.yy");
    }

    // Разные дни и месяцы 
    if(dayStart !== dayEnd && monthStart !== monthEnd && yearStart === yearEnd){
        return format(datesStart, "dd.MM") + "-" + format(datesEnd, "dd.MM.yy");
    }

    // Разные года дни и месяцы 
    if(dayStart !== dayEnd && monthStart !== monthEnd && yearStart !== yearEnd){
        return format(datesStart, "dd.MM.yy") + "-" + format(datesEnd, "dd.MM.yy");
    }
}

// dd.MM.yy 
// format(new Date(dateStart), "dd.MM.yy") 

// Диапазон
// format(new Date(dateStart), "dd") + "-" + format(new Date(dateEnd), "dd.MM.yy") 
// format(new Date(dateStart), "dd.MM") + "-" + format(new Date(dateEnd), "dd.MM.yy") 
// format(new Date(dateStart), "dd.MM.yy") + "-" + format(new Date(dateEnd), "dd.MM.yy") 
