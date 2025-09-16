// 객체 타입간의 호환성
// -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow"
}

let dog: Dog =  {
    name: "레오",
    color: "brown",
    breed: "슈나우저"
}

animal = dog;
// dog = animal 은 안됨.

// let animal2: Animal = {
//     name: "고양이",
//     color: "black",
//     breed: "cat"
// }
// -> 이건 또 안됨. -> why?  초과 프로퍼티 검사