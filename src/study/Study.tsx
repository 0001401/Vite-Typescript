export const Study = () => {
  const name: string = "소영";
  const age: number = 28;
  const merried: boolean = false;

  //array
  const names: string[] = ["소영", "성호"];
  const ages: number[] = [20, 30];

  //Object
  const hanghae: { name: string; age: number } = { name: "소영", age: 28 };

  //typescript는 타입 지정을 자동으로 해주기 때문에 모든 곳에 사용하지는 않는다

  //타입을 미리 정하기 애매할 때 | (or)기호 사용 (union type)
  const people: string | number = 23;
  const apple: (string | number)[] = [1, "소영"]; //배열 묶어줄 때
  const number: { a: string | number; b: number } = { a: "123", b: 123 };

  //모든 타입의 데이터가 들어올 수 있어요 (any type)
  //타입 쉴드 해제 일반 자바스크립트 변수처럼 사용하고 싶을 때 사용합니다
  const peoples: any[] = ["25", 25, false];

  //unknown type (any보다 조금 더 안전해요)
  const banana: unknown = "1";
  // banana - 1 이라고 식을 짜면 오류가 납니다! any는 안 나요 정확한 타입끼리의 연산만 가능하게 해 줘요
  // typescript는 엄격한 거 좋아함! 딱 내 스타일임!
  return <div>Study</div>;
};
