import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
  } from "../challenges/exercise006";

  describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([])).toBe(0);
        expect(sumMultiples([15])).toBe(15);
        expect(sumMultiples([3, 5])).toBe(8);
        expect(sumMultiples([2, 4, 7])).toBe(0);
        expect(sumMultiples([0, 0, 0])).toBe(0);
        expect(sumMultiples([3, 0, 5, 0])).toBe(8);
        expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
        expect(sumMultiples([5, 3, 7, 8, 1, 10, 11, 12, 15, 23])).toBe(45);
    })
});

   describe("isValidDNA", () => {
    test("returns true if input string is a valid DNA string, containing characters C, G, T or A only, otherwise false", () => {
        expect(isValidDNA("")).toBe(false);
        expect(isValidDNA("CGTA")).toBe(true);
        expect(isValidDNA("CGTAF")).toBe(false);
        expect(isValidDNA("C")).toBe(true);
        expect(isValidDNA("c")).toBe(false);
        expect(isValidDNA("Elephant")).toBe(false);
        expect(isValidDNA("elephant")).toBe(false);        
        expect(isValidDNA("GCACGTAT")).toBe(true);
        expect(isValidDNA("C.J.")).toBe(false);
        expect(isValidDNA("CGTA?")).toBe(false);
        expect(isValidDNA("GCAC GTAT")).toBe(false);
        expect(isValidDNA("C|G|T|A")).toBe(false);
    })
});

describe("getComplementaryDNA", () => {
    test("returns a string of the complementary base pairs. If string is not valid DNA raises error", () => {        
        expect(() => getComplementaryDNA("")).toThrow("str is not a valid DNA string!");        
        expect(getComplementaryDNA("CGTA")).toBe("GCAT");        
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");        
        expect(getComplementaryDNA("GCACGTAT")).toBe("CGTGCATA");      
        expect(() => getComplementaryDNA("GCAC GTAT")).toThrow("str is not a valid DNA string!");           
        expect(() => getComplementaryDNA("CGTA?")).toThrow("str is not a valid DNA string!");         
        expect(() => getComplementaryDNA("cgta")).toThrow("str is not a valid DNA string!");         
        expect(() => getComplementaryDNA("cGTA")).toThrow("str is not a valid DNA string!");         
        expect(() => getComplementaryDNA("foo")).toThrow("str is not a valid DNA string!");         
        expect(() => getComplementaryDNA("C.J.")).toThrow("str is not a valid DNA string!"); 
    })         
});

describe("isItPrime", () => {
    test("return true/false depending on whether it is a prime number or not", () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(0)).toBe(false); 
        expect(isItPrime(1)).toBe(true); 
        expect(isItPrime(2)).toBe(true); 
        expect(isItPrime(3)).toBe(true); 
        expect(isItPrime(11)).toBe(true); 
        expect(isItPrime(37)).toBe(true); 
        expect(isItPrime(4)).toBe(false); 
        expect(isItPrime(6)).toBe(false); 
        expect(isItPrime(36)).toBe(false); 
        expect(isItPrime(144)).toBe(false);
        expect(isItPrime(51)).toBe(false);
    })
});

describe("createMatrix", () => {
    test("return true/false depending on whether it is a prime number or not", () => {  
        expect(createMatrix(0,1)).toEqual([]);  
        expect(createMatrix(1,0)).toEqual([[0]]);   
        expect(createMatrix(2,1)).toEqual([[1,1],[1,1]]);   
        expect(createMatrix(3,"foo")).toEqual([["foo", "foo", "foo"],["foo", "foo", "foo"],["foo", "foo", "foo"]]);
    })
})

describe("areWeCovered", () => {
    test("return true/false depending on whether there are enough staff scheduled for the given day", () => {
        const staffRota = [ { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Boris", rota: ["Saturday", "Sunday", "Monday", "Thursday"] },
        { name: "Priti", rota: ["Saturday", "Monday", "Wednesday"] },
        { name: "Liz", rota: ["Monday", "Friday"] },
        ];
        expect(areWeCovered(staffRota,"Monday")).toBe(true);
        expect(areWeCovered(staffRota,"Sunday")).toBe(false);
        expect(areWeCovered(staffRota,"Tuesday")).toBe(false);
        expect(areWeCovered(staffRota,"Wednesday")).toBe(false);
        expect(areWeCovered(staffRota,"Thursday")).toBe(false);
        expect(areWeCovered(staffRota,"Friday")).toBe(false);
        expect(areWeCovered(staffRota,"Saturday")).toBe(true);
    })
})

  