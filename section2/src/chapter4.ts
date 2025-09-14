//타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "류태현",
  nickname: "aryu",
  birth: "2001-12-17",
  bio: "안녕허세요",
  location: "용인시",
};

let user2: User = {
  id: 1,
  name: "김태현",
  nickname: "kim",
  birth: "2001-12-17",
  bio: "안녕허세요",
  location: "용인시",
};

//인덱스 시그니처
type CountryCodes = {
  //   Korea: string;
  //   japan: string;
  //   china: string;
  //   나라가 200개라면?? 쒯 따라서
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  korea: "ko",
  japan: "jp",
  china: "cn",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  korea: 410,
  japan: 392,
  china: 156,
};
