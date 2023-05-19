class TodoItem {
  // 접근 제한자를 사용 할 수 있다.
  constructor(
    public id: number,
    public task: string,
    public complete: boolean = false
  ) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }

  // 값이 존재하지 않을 때 void
  printDetails(): void {
    console.log(
      `${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`
    );
  }
}

export default TodoItem;
