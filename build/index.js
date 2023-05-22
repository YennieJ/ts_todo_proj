"use strict";
////////// TodoItems //////////
// import TodoConsole from "./view/TodoConsole";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const todoConsole = new TodoConsole();
// todoConsole.promptUser();
////////// ========= //////////
////////// UnionType //////////
// import UnionType from "./view/UnionType";
// const sorter = new UnionType([10, -7, 22, 3, 15]);
// console.log(sorter.sort());
// const sorterStr = new UnionType("Typescript");
// console.log(sorterStr.sort());
////////// ========= //////////
////////// Interface //////////
const ChractersCollection_1 = __importDefault(require("./Interface/ChractersCollection"));
const Cunstomer_1 = require("./Interface/Cunstomer");
const CustomerCollection_1 = __importDefault(require("./Interface/CustomerCollection"));
const NumbersCollection_1 = __importDefault(require("./Interface/NumbersCollection"));
const YenSorter_1 = __importDefault(require("./Interface/YenSorter"));
let numCollection = new NumbersCollection_1.default([10, -7, 55, 3, 21]);
let sorter = new YenSorter_1.default(numCollection);
sorter.sort();
console.log(sorter.printCollection);
let charCollection = new ChractersCollection_1.default("TypeScript");
let sorterC = new YenSorter_1.default(charCollection);
sorterC.sort();
console.log(sorterC.printCollection);
let customerCollection = new CustomerCollection_1.default([
    new Cunstomer_1.Customer("A111", "Lee"),
    new Cunstomer_1.Customer("B111", "Jin"),
    new Cunstomer_1.Customer("C111", "Pyo"),
]);
let sorterCustom = new YenSorter_1.default(customerCollection);
sorterCustom.sort();
sorterCustom.printCollection();
