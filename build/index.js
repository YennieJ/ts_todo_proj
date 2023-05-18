"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
const data = [
    { id: 1, task: "groceries", complete: true },
    { id: 2, task: "Study TS", complete: false },
];
console.log("My Todo List");
// 타입 추론기능을 통해서 별다른 타입 지정 없이 가능 (ex: 변수 i,todoItem )
for (let i = 0; i < data.length; i++) {
    let todoItem = new TodoItem_1.default(data[i].id, data[i].task, data[i].complete);
    todoItem.printDetails();
}
