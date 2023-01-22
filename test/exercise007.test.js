import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,
  } from "../challenges/exercise007";

  describe("sumDigits", () => {
    test("takes a number, e.g. 123 and returns the sum of all its digits", () => {
        expect(sumDigits(0)).toBe(0);
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(1)).toBe(1);
        expect(sumDigits(100)).toBe(1);
        expect(sumDigits(144)).toBe(9);
        expect(sumDigits(1234567890)).toBe(45);
        expect(sumDigits(81)).toBe(9);
        expect(sumDigits(9)).toBe(9);
    })
  })
  
  describe("createRange", () => {
    test("takes 3 numbers: a start, an end and a step value. It returns an array of numbers between the start and the end, spaced by the step", () => {
        expect(createRange(1,10,1)).toEqual([1,2,3,4,5,6,7,8,9,10]);
        expect(createRange(0,6,2)).toEqual([0,2,4,6]);
        expect(createRange(1,7,2)).toEqual([1,3,5,7]);
        expect(createRange(11,20,3)).toEqual([11,14,17,20]);
        expect(createRange(10,19,5)).toEqual([10,15]);
        expect(createRange(11,44,11)).toEqual([11,22,33,44]);
        expect(createRange(1,7)).toEqual([1,2,3,4,5,6,7]);
        expect(createRange(4,9)).toEqual([4,5,6,7,8,9]);
    })
  })

  describe("getScreentimeAlertList", () => {
    test("takes 3 numbers: a start, an end and a step value. It returns an array of numbers between the start and the end, spaced by the step", () => {
        const userArr = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                            ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ]
            },
        ]
        expect(getScreentimeAlertList(userArr,"2019-05-02")).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(userArr,"2019-06-11")).toEqual([]);
    })
  })

  describe("hexToRGB", () => {
    test("Takes a string representing a hexadecimal colour code and returns a string with the RGB triple equivalent", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
        /* Maroon */
        expect(hexToRGB("#800000")).toBe("rgb(128,0,0)");
        /* Dark Red */
        expect(hexToRGB("#8B0000")).toBe("rgb(139,0,0)");
        /* Brown */
        expect(hexToRGB("#A52A2A")).toBe("rgb(165,42,42)");
        /* White */
        expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
        /* Black */
        expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
        /* Gray */
        expect(hexToRGB("#808080")).toBe("rgb(128,128,128)");
    })
  })

  describe("findWinner", () => {
    test("takes a nested array, representing a 0s and Xs grid. It returns a string: 'X'/'0', depending on who has won", () => {
        const grid1 =  [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ];
        expect(findWinner(grid1)).toBe("X");
        /* 
        expect(findWinner("#800000")).toBe("rgb(128,0,0)");
        expect(findWinner("#8B0000")).toBe("rgb(139,0,0)");
        expect(findWinner("#A52A2A")).toBe("rgb(165,42,42)");
        expect(findWinner("#FFFFFF")).toBe("rgb(255,255,255)");
        expect(findWinner("#000000")).toBe("rgb(0,0,0)");
        expect(findWinner("#808080")).toBe("rgb(128,128,128)"); 
        */
    })
  })
