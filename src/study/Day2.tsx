export const Day2 = () => {
  //π‘ type aliasμ ν¨μ type μ μ₯νμ¬ μ¬μ©νκΈ°
  type Apple = (apple: string) => number; // μ΅λͺ ν¨μ

  //ν¨μ ννμ (type alias λΆμ°©μ)
  const banana: Apple = function (a) {
    return 100;
  };

  //object μμ ν¨μλ λ§λ€μ΄λ³΄μμ
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
