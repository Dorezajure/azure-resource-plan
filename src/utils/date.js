import { endOfDay, startOfDay, differenceInDays } from "date-fns";

export function getIntervalString(dateStart, dateEnd) {
    return String(
        differenceInDays(
            endOfDay(new Date(dateEnd)),
            startOfDay(new Date(dateStart))
        )
    );
}
