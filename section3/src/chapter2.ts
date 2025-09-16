// Unknown 타입
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "a";
  let c: unknown = true;
  // 등 모든 타입 가능
}

// never 타입
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
}

// void 타입
function voidEsam() {
  function voidFunc(): void {
    console.log("hi");
    return voidVar;
  }

  let voidVar: void = undefined;
}

// any 타입 (치트키)
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let neverVar: never;

  anyVar = unknownVar;
  unknownVar = anyVar;

//   neverVar = anyVar; 은 안됨
}
