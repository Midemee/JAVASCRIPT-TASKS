const {add, subtract} = require("./arithmetic-function");
/*import {add, subtract} from "./arithmetic-function"*/

test("test addition of two positive numbers", ()=> {

let firstNumber = 82;
let secondNumber = 18;

    expect(add(firstNumber, secondNumber)).toBe(100)

})

test("test that addition of a positive and a negative number gives accurate result", ()=> {

let firstNumber = 82;
let secondNumber = -18;

    expect(add(firstNumber, secondNumber)).toBe(64)
})


test("test that addition of two negative numbers gives a negative number", ()=> {

let firstNumber = -10;
let secondNumber = -5;

    expect(add(firstNumber, secondNumber)).toBe(-15)
})

test("test that subtraction of two numbers gives accurate result", ()=> {

let firstNumber = 80;
let secondNumber = 18;

    expect(subtract(firstNumber, secondNumber)).toBe(62)
})

test("test that subtraction of two negative numbers gives accurate result", ()=> {

let firstNumber = -80;
let secondNumber = -20;

    expect(subtract(firstNumber, secondNumber)).toBe(-60)
})
