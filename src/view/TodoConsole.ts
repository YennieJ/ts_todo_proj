import { data } from "./../data";
import * as inquirer from "inquirer";
import TodoItem from "../model/TodoItem";
import TodoCollection from "../service/TodoCollection";
import { Commends } from "../model/Commends";

class TodoConsole {
  private todoCollection: TodoCollection;

  private showCompleted: boolean;

  constructor() {
    this.showCompleted = true;
    const sampleTodos: TodoItem[] = data.map(
      (item) => new TodoItem(item.id, item.task, item.complete)
    );

    this.todoCollection = new TodoCollection("My Todo List", sampleTodos);
  }

  displayTodoList(): void {
    console.log(
      `====${this.todoCollection.userName}` +
        `(${this.todoCollection.getItemCounts().incomplete} items todo)`
    );
    this.todoCollection
      .getTodoItems(this.showCompleted)
      .forEach((item) => item.printDetails());
  }

  promptUser(): void {
    console.clear();
    this.displayTodoList();

    inquirer
      .prompt({
        type: "list",
        name: "commend",
        message: "Choses option",
        choices: Object.values(Commends),
      })
      .then((answers) => {
        switch (answers["commend"]) {
          case Commends.Toggle:
            this.showCompleted = !this.showCompleted;
            this.promptUser();
            break;
          case Commends.Add:
            this.promptAdd();
            break;
        }
      });
  }

  promptAdd(): void {
    console.clear();
    inquirer
      .prompt({
        type: "input",
        name: "add",
        message: "Enter task :",
      })
      .then((answers) => {
        if (answers["add"] !== "") {
          this.todoCollection.addTodo(answers["add"]);
        }
        this.promptUser();
      });
  }
}

export default TodoConsole;
