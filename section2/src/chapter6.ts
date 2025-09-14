//any
//특정 변수의 타입을 우리가 확실히 모를 때
//타입스크립트 이점이 없음. 최대한 사용하지 않는 것이 좋음
let anyVar: any = 10;
anyVar = "Hello";
anyVar = {};
let num: number = 10;
num = anyVar;

//unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar 은 안됨. 에러.
// unknownVar.toUpperCase()  도 안됨. any는 됨.
// any는 양쪽 다되고 언노운은 반대로는 안됨. 언노운이 좀 더 안전함
