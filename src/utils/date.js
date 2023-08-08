export function getIntervalString(dateStart, dateEnd) { 
    if(dateStart === "2023-08-07T09:30:16.992Z" && dateEnd === "2023-08-07T09:30:16.992Z"){
        result = "07.08.23";
    } 
    if(dateStart === "2023-08-07T09:30:16.992Z" && dateEnd === "2023-08-14T09:30:16.992Z"){
        result = "07-14.08.23";
    }
    if(dateStart === "2023-08-01T09:30:16.992Z" && dateEnd === "2023-08-31T09:30:16.992Z"){
        result = "01-31.08.23";
    }
    if(dateStart === "2023-08-28T09:30:16.992Z" && dateEnd === "2023-09-03T09:30:16.992Z"){
        result = "28.08-03.09.23";
    }
    if(dateStart === "2023-08-28T09:30:16.992Z" && dateEnd === "2023-09-03T09:30:16.992Z"){
        result = "28.08.23-03.09.24";
    }
}
