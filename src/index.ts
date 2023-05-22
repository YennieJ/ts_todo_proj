////////// TodoItems //////////
// import TodoConsole from "./view/TodoConsole";

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

import CharactersCollection from "./Interface/ChractersCollection";
import { Customer } from "./Interface/Cunstomer";
import CustomerCollection from "./Interface/CustomerCollection";
import NumbersCollection from "./Interface/NumbersCollection";
import YenSorter from "./Interface/YenSorter";

let numCollection = new NumbersCollection([10, -7, 55, 3, 21]);

let sorter = new YenSorter(numCollection);

sorter.sort();
console.log(sorter.printCollection);

let charCollection = new CharactersCollection("TypeScript");

let sorterC = new YenSorter(charCollection);
sorterC.sort();
console.log(sorterC.printCollection);

let customerCollection = new CustomerCollection([
  new Customer("A111", "Lee"),
  new Customer("B111", "Jin"),
  new Customer("C111", "Pyo"),
]);

let sorterCustom = new YenSorter(customerCollection);
sorterCustom.sort();
sorterCustom.printCollection();
