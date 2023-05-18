import { data } from "./data";
import TodoCollection from "./TodoCollection";
import TodoItem from "./TodoItem";

const sampleTodos: TodoItem[] = data.map(
  (item) => new TodoItem(item.id, item.task, item.complete)
);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

myTodoCollection.addTodo("Study Js");
myTodoCollection.addTodo("Meeting Jin");

myTodoCollection.markComplete(3, true);

console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => item.printDetails());
