# ts_todo_proj

### Class

```js
class Person {
  // construtor란 객체의 초기값
  construtor(name, first, TorF) {
    this.name = name;
    this.first = first;
    this.TorF = boolean;
  }
}

const kim = new Person("kim", 10, true);

console.log("kim", kim);

// ⭕️ console
kim Person {name :'kim',first:10,TorF:true}

```

### Class_ts

```ts
class TodoItem {
  name: number;
  first: string;
  TorF: boolean;

  constructor(name: number, first: string, TorF: boolean) {
    this.name = name;
    this.first = first;
    this.TorF = TorF;
  }
}
```

접근제한자?

Public : 자식 클래스나, 클래스 인스턴스에서 접근이 가능한 값(default)

private (or #) : 자식 클래스에서 접근 불가능함, 자신 내부에서만 사용할 수 있게됨

protected : 자식 클래스에서 접근이 가능함, 클래스 인스턴스에서는 참조가 불가능함

```ts
// 접근 제한자를 사용하기
class TodoItem {
  constructor(public name: number, public first: string, public TorF: boolean) {
    this.name = name;
    this.first = first;
    this.TorF = TorF;
  }
}

const kim = new Person("kim", 10, true);

console.log("kim", kim);

// ⭕️ console
kim Person {name :'kim',first:10,TorF:true}

```

## Type Annotations [1/3] - Varlables, Object Literal Annotations

- 정적 타입을 기본으로 하는 C, Java와 마찬가지로 변수 선언에 타입을 지정할 수 있다.
- 변수에 대한 타입을 지정하면 해당 변수에 다른 타입의 값을 대입할 수 없다.
- 변수에 정의한 타입과 다른 타입의 값을 대입하는 코드는 TypeScript 컴파일러에 의해 컴파일 오류가 발생된다.
- 객체 리터럴에 대한 타입 정의는 해당 리터럴 객체가 갖는 각각의 프로퍼티에 대한 타입을 나열하는 형태로 정의한다.

```ts
// primitive types
let name: string = "kim";
let age: number = 20;
let hasName: boolean = true;

let nullValue: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "yellow", "blue"];
let numbers: number[] = [1, 2, 3, 4, 5];

// Class
class Person {}
let person = new Person();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
```

## Type Annotations [2/3] - Functions [1/2]

- 함수를 정의할 때 파라미터와 반환값에 타입을 지정한다.
- 함수의 종류(선언적함수, 익명함수, 람다함수)에 따라 타입 지정에 대한 표현에는 차이가 있다.
- 함수의 파라미터를 정의할 때 선택적 매개변수를 지정할 수 있다.

> 선언적함수

```ts
function add(n1: number, n2: number): number {
  return n1 + n2;
}
```

> 익명 함수

```ts
const add = function (n1: number, n2: number): number {
  return n1 + n2;
};
```

> 람다 함수

```ts
const add: (n1: number, n2: number) => number = (
  n1: number,
  n2: number
): number => {
  return n1 + n2;
};
```

## Type Annotations [3/3] - Functions [2/2]

- TypeScript는 가변인자를 지원하지 않는다. 파라미터의 갯수와 타입이 동일해야 함!
- 대신 TypeScript는 함수의 오버로딩을 통해 가변인자와 같은 효과를 구현할 수 있다.
- 선택적 매개변수는 함수 호출시 전달인자를 선택적으로 보낼 수 있는 기능의 매개변수다.
- 이외에 ES6 버전부터 지원하는 기본 매개변수, 나머지 매개변수가 있다.

> 함수 오버로딩

```ts
function add(firstParam: string, secondParam: string): string;
function add(firstParam: numberf, secondParam: number): number;

function add(firstParam: any, secondParam: any): any {
  console.log(firstParam + secondParam);
}

add(10, 20);
add("10", "20");
```
