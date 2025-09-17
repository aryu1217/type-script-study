// 인터페이스의 학장
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  //   name: "str"; // 부모타입의 서브타입으로만 재정의 가능
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  age: 1,
  isBark: true,
  isScratch: true,
};
