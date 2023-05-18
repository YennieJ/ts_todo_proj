import TodoItem from "./TodoItem";

class TodoCollection {
  private nextId: number = 1;

  constructor(public userName: string, public todoItems: TodoItem[] = []) {}

  // id가 없을수도 있으므로 undefined까지 추가
  // 타입추론으로
  getTodoById(id: number): TodoItem | undefined {
    return this.todoItems.find((item) => item.id === id);
  }

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }

    this.todoItems.push(new TodoItem(this.nextId, task));
    return this.nextId;
  }

  markComplete(id: number, complete: boolean): void {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }
}

export default TodoCollection;
