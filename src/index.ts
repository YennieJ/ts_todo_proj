import { data } from "./data";
import TodoCollection from "./service/TodoCollection";
import TodoItem from "./model/TodoItem";

const sampleTodos: TodoItem[] = data.map(
  (item) => new TodoItem(item.id, item.task, item.complete)
);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

myTodoCollection.addTodo("Study Js");
myTodoCollection.addTodo("Meeting Jin");

myTodoCollection.markComplete(3, true);

console.log(`${myTodoCollection.userName}`);

myTodoCollection.removeComplete();
myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
console.log("========================");
myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails());
