// 타입 단언
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
(person.name = "홍길동"), (person.age = 25);

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "레오",
  color: "black",
  breed: "슈나우저",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 함
let num1 = 10 as never;
let num2 = 20 as unknown;
// let num3 = 30 as string -> 에러

// const 단언
let num4 = 10 as const;

let cat = {
  name: "나비",
  color: "yellow",
} as const;
// cat.name = "나비2"; -> const라 수정 불가

// Non Null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "홍길동",
};

// const len: number = post.author?.length;
// -> 옵셔널 체이닝 떄문에 number타입에 undefined가 들어가려해서 에러남
const len: number = post.author!.length;
