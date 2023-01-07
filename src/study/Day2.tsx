export const Day2 = () => {
  //💡 type alias에 함수 type 저장하여 사용하기
  type Apple = (apple: string) => number; // 익명 함수

  //함수 표현식 (type alias 부착시)
  const banana: Apple = function (a) {
    return 100;
  };

  //object 안에 함수도 만들어보아요
  type HanghaeType = {
    name: string;
    hanghae: (x: number) => number;
    changeName: () => void;
  };

  const people: HanghaeType = {
    name: "soyoung",
    hanghae(x) {
      return x + 1;
    },
    changeName: () => {},
  };



  return <div>Typescript Study</div>;
};
