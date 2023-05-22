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
                if (typeof this.collection === "string") {
                    if (this.collection[j].toLowerCase() >
                        this.collection[j + 1].toLowerCase()) {
                        const characters = this.collection.split("");
                        const tmep = characters[j];
                        characters[j] = characters[j + 1];
                        characters[j + 1] = tmep;
                        this.collection = characters.join("");
                    }
                }
                else {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
            }
        }
        return this.collection;
    }
}
exports.default = YenSorter;
// 사용자 정의 타입가드
let data;
function isString(data) {
    return data.split !== undefined;
}
data = "TypeScript";
if (isString(data)) {
    data.split("");
}
else {
    // number[]
}
