//enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
} //숫자 할당 제거하면 0,1,2 자동할당 됨. 가장 위를 10으로하면 아래부터 11, 12로 자동 할당

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "류태현",
  role: Role.ADMIN, // 0 <- 관리자
  //   language = Language.korean, // "ko"
};
const user2 = {
  name: "배인호",
  role: Role.USER, // 1 <- 일반유저
};
const user3 = {
  name: "이민수",
  role: Role.GUEST, // 2 <- 게스트
};
