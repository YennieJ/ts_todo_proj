// import TodoConsole from "./view/TodoConsole";

// const todoConsole = new TodoConsole();

// todoConsole.promptUser();

import YenSorter from "./view/UnionType";

const sorter = new YenSorter([10, -7, 22, 3, 15]);

console.log(sorter.sort());

const sorterStr = new YenSorter("Typescript");
console.log(sorterStr.sort());
