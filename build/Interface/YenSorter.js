"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class YenSorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        //오름차순 정렬
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
    printCollection() {
        console.log(this.collection);
    }
}
exports.default = YenSorter;
