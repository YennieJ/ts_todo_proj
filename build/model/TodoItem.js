"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    // 접근 제한자를 사용 할 수 있다.
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    // 값이 존재하지 않을 때 void
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.default = TodoItem;
