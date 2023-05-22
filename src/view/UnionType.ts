class YenSorter {
  constructor(private collection: number[] | string) {}

  sort(): number[] | string {
    const { length } = this.collection;

    //오름차순 정렬
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (typeof this.collection === "string") {
          if (
            this.collection[j].toLowerCase() >
            this.collection[j + 1].toLowerCase()
          ) {
            const characters = this.collection.split("");
            const tmep = characters[j];
            characters[j] = characters[j + 1];
            characters[j + 1] = tmep;
            this.collection = characters.join("");
          }
        }
        // else {
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }

          // }
        }
      }
    }
    return this.collection;
  }
}

export default YenSorter;

// 3가지 방법 typeof, 사용자 정의, instanceof

// 사용자 정의 타입가드
let data: string | number[];

function isString(data: string | number[]): data is string {
  return (<string>data).split !== undefined;
}

data = "TypeScript";

if (isString(data)) {
  data.split("");
} else {
  // number[]
}
