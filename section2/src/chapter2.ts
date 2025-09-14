//배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["a", "b,", "c"];

//이런식도 가능
let boolArr: Array<boolean> = [true, false, true];

//배열 요소의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "a"];

//다차원 배열의 타입 정의 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//튜플: 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "a,", true];
