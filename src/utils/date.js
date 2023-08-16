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

export function getIntervalDate(strings) {
    // В результате выполнения кода в dates будет содержаться новый массив объектов, где каждый объект будет содержать дату в формате Date и исходную строку из массива strings.

    // ЧТО ПЕРЕДАТЬ В MAP?
    const dates = strings.map((str) => ({}));

    // Содаем изменяемую переменную
    let current = { datesStart: dates[0].string };

    // Переменная с итоговым интервалом дат
    const intervals = [current];

    // Данный код анализирует массив dates и на основе разницы между датами создает объекты интервалов, где каждый интервал представлен объектом с начальной и конечной датами. Все эти объекты интервалов добавляются в массив intervals.

    // ПЕРЕПИСАТЬ УСЛОВИЕ
    for (let i = 1; i < dates.length; i += 1) {
        if (diff === 1) {
            // Если разница равна 1 дню, то берем на вывод "dateEnd" в input
            current.dateEnd = dates[i].string;
        } else {
            // Иначе в интервал мы записываем datesStart - равный 1 элементу и dateEnd - равный
            current = {
                datesStart: dates[0].string,
                dateEnd: dates.length - 1,
            };
            intervals.push(current);
        }
    }

    // Вывод полученного интервала
    console.log(intervals);
}
