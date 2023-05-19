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

### forEach와 map의 차이

```ts
const nums = [1, 2, 3];

const forEach = [];

nums.forEach((n) => forEach.push(n * 2));
const map = nums.map((n) => n * 2);

// 결과 값은 같지만, forEach는 반복문을 대체하기 위한 함수이고
// map은 새로운 배열을 생성하기 위한 고차함수이다.

❌
const notWorking = nums.forEach((n) => n * 2);

```

## Type Annotations [1/4] - Inference AroundFunctions [1/2]

- 함수의 파라미터를 정의할 때 각 파라미터의 타입을 지정하지 않으면 any 타입의 파라미터가 지정된다.
- 함수의 반환값에 대한 타입은 return 실행문에 따라 타입추론이 적용된다.
- 파라미터에 타입을 지정하지 않으면 일반 변수와 마찬가지로 암묵적인 any 타입의 적용으로 경고 사항이다.
- 반환값의 경우 return 구문으로 명시적인 타입의 유추가 가능하다.

```ts
const findArea = function (width: number, height: number): number {
  return width * height;
};
const findArea = (width: number, height: number): number => {
  return width * height;
};

// return 값의 타입을 정해주지 않아도 함수의 타입추론 적용
const findArea = function (width: number, height: number) {
  return width * height;
};
```

## Type Annotations [2/4] - Inference AroundFunctions [2/2]

- 함수의 반환값이 없을 경우 void
- 함수의 반환값으로 정의 가능한 never 타입은 절대 발생하지 않는 값의 타입을 나타낸다.
- void 타입은 변수로 사용될 경우 undefined, null 값만 대입 가능하다.
- 어떤 타입의 변수에도 never 타입은 대입 될 수 있지만 never 타입에는 어떤 타입의 값도 대입될 수 없다.

```ts
let accountBalance: number = 10000;

function overdraftError(message?: string): never {
  throw Error(message);
}

function withdraw(balance: number): number {
  if (accountBalance < balance) {
    overdraftError("잔액이 부족합니다.");
  }
  return accountBalance - balance;
}

console.log(withdraw(3000)); // 7000
console.log(withdraw(15000)); // Error: 잔액이 부족합니다.
```

## Type Annotations [3/4] - Typed Array

- 배열도 일반 변수와 마찬가지의 타입 시스템이 적용되며 타입의 명시적 지정과 초기화를 통한 타입 지정이 가능하다.
- 타입을 명시적 혹은 목시적으로 지정하지 않을 경우 해당 배열 참조 변수는 any 타입의 변수로 지정된다.
- 배열에 서로 다른 타입의 요소를 저장하는 것이 가능하며 이를 타입으로 지정할 수 있다.
- 서로 다른 타입의 요소로 타입이 지정되면 해당 배열에는 순서에 상관없이 지정된 타입들의 요소를 저장할 수 있다.

```ts
// 타입을 지정할 수도 안할수도있다.(타입 추론)
const members: string[] = ["Jin", "Lee", "Pyo", "Kang"];

// 다른 타입의 요소로 배열을 만들 수 있다.
// 지정한 타입 외에 다른 타입이면 컴파일 에러
const myArr = ["TypeScript", 2022];
// const myArr:(string | numberf) = [];
```

## Type Annotations [4/4] - Tuples

- 튜플을 이용하면 배열의 요소 수와 각 요소에 대한 타입을 지정할 수 있다.
- 튜플은 정해진 길이에 맞지 않으면 에러가 발생한다. push() 함수를 이용하면 튜플의 규칙은 무시된다.
- 서로 다른 타입의 요소를 갖는 배열은 순서에 상관없이 데이터를 넣을 수 있는 반면 튜플은 정해진 순서에 맞게 넣는다.
- 튜플 타입은 배열보다 저장되는 요소에 순서와 수에 제약을 두고자 할 때 사용한다.

```ts
const tuples: [string, number] = ["Lee", 31];

tuples[0] = "Jin"; // OK
// tuples[0] = 50 // 컴파일 에러 [0]번째 엔 string만 가능

tuples[1] = 34;
console.log(tuples); // ['Jin' , 34 ]

tuples.push(100);
console.log(tuples); // ['Jin' , 34 , 100 ]

//class 객체를 사용하는 경우가 더 많아서 특별히 많이 사용하진 않음.
```
