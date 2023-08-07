import { getIntervalString } from "./date";

describe("Преобразование интервалов в текст", () => {
    test("Интервал в один день", () => {
        const result = getIntervalString(
            "2023-08-07T09:30:16.992Z",
            "2023-08-07T09:30:16.992Z"
        );
        expect(result).toBe("07.08.23");
    });
    test("Интервал в неделю", () => {
        const result = getIntervalString(
            "2023-08-07T09:30:16.992Z",
            "2023-08-14T09:30:16.992Z"
        );
        expect(result).toBe("07-14.08.23");
    });
    test("Интервал в месяц", () => {
        const result = getIntervalString(
            "2023-08-01T09:30:16.992Z",
            "2023-08-31T09:30:16.992Z"
        );
        expect(result).toBe("01-31.08.23");
    });

    test("Интервал в неделю при смене месяца", () => {
        const result = getIntervalString(
            "2023-08-28T09:30:16.992Z",
            "2023-09-03T09:30:16.992Z"
        );
        expect(result).toBe("28.08-03.09.23");
    });

    test("Интервал в неделю при смене года", () => {
        const result = getIntervalString(
            "2023-12-28T09:30:16.992Z",
            "2024-01-03T09:30:16.992Z"
        );
        expect(result).toBe("28.08.23-03.09.24");
    });
});
