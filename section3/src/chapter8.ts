// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 말함

type Admin = {
  tag: "ADMIN"; // 태그 필드 추가
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// function login(user: User) {
//   if ("kickCount" in user) {
//     console.log(`${user.name}님 현재까지 ${user.kickCount}번 강퇴했습니다.`);
//   } else if ("point" in user) {
//     console.log(`${user.name}님 현재까지 ${user.point}모았습니다..`);
//   } else if ("visitCount" in user) {
//     console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
//   }
// }
// -> 조건문만 보고 무슨 타입일때인지 알기 어려움

function login(user: User) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}번 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다..`);
  } else if (user.tag === "GUEST") {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
  }
}

// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function porecessResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩중 ...");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생: ${task.error?.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공: ${task.response?.data}`);
      break;
    }
  }
}

const loading = {
  state: "LOADING",
};
const failed = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~",
  },
};
const success = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~~",
  },
};
