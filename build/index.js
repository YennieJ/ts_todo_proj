"use strict";
// import TodoConsole from "./view/TodoConsole";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const todoConsole = new TodoConsole();
// todoConsole.promptUser();
const UnionType_1 = __importDefault(require("./view/UnionType"));
const sorter = new UnionType_1.default([10, -7, 22, 3, 15]);
console.log(sorter.sort());
const sorterStr = new UnionType_1.default("Typescript");
console.log(sorterStr.sort());
