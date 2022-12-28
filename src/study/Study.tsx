export const Study = () => {
  const name: string = "소영";
  const age: number = 28;
  const merried: boolean = false;

  //💡array
  const names: string[] = ["소영", "성호"];
  const ages: number[] = [20, 30];

  //💡Object
  const hanghae: { name: string; age: number } = { name: "소영", age: 28 };

  //typescript는 타입 지정을 자동으로 해주기 때문에 모든 곳에 사용하지는 않는다

  //타입을 미리 정하기 애매할 때 | (or)기호 사용 (union type)
  const people: string | number = 23;
  const apple: (string | number)[] = [1, "소영"]; //배열 묶어줄 때
  const number: { a: string | number; b: number } = { a: "123", b: 123 };

  //모든 타입의 데이터가 들어올 수 있어요 (any type)
  //타입 쉴드 해제 일반 자바스크립트 변수처럼 사용하고 싶을 때 사용합니다
  const peoples: any[] = ["25", 25, false];

  //💡unknown type (any보다 조금 더 안전해요)
  const banana: unknown = "1";
  // banana - 1 이라고 식을 짜면 오류가 납니다! any는 안 나요 정확한 타입끼리의 연산만 가능하게 해 줘요
  // typescript는 엄격한 거 좋아함! 딱 내 스타일임!

  //함수에 타입 지정하기
  function soyoung(a: number): number {
    return a * 2;
  }
  soyoung(10);

  //실수로 뭔가 return되는 것을 막아주고 싶을 땐 void를 지정해줍니다
  function young(a: number): void {
    a * 2;
  }
  //파라미터에 타입이 지정되면 함수 안에 무조건 값이 들어와야 합니다 왜냐하면 타입을 지정했기 때문에
  young(10);

  //파라미터가 옵션일 경우에는 파라미터변수?: 타입
  // ex) {age?:number}
  // ? = undefined랑 똑같아요 (옵셔널체이닝)

  //만약 유니온타입의 연산을 하려면 if문을 작성해주어야 합니다
  function fun(x: number | string): void {
    if (typeof x === "number") {
      //Narrowing 문법 타입과 비교를 꼭 해주셔야 합니다! 타입스크립트는 엄격한 뱐태...
      x + 1;
    } else {
      //else문도 확실하게 넣어주면 좋아요!
      console.log("문자랑은 덧셈이 안 됩니다!");
    }
  }

  // 타입 비교할 때 속셩명 in 오브젝트 자료
  // typeof 변수 , 인스턴스 instanceof 부모 (이 오브젝트가 부모의 자식인지)

  function my(x: number | string): void {
    //assertion 문법
    let array: number[] = [];
    array[0] = x as number;
    //타입을 넘버로 덮어씌워주세요!
    //편하다고 이거만 쓰면 사수한테 혼납니다 ^^
    // 용도 1) Narrowing 할 때 쓰는 것 맞음 (타입이 많을 때)
    // 용도 2) 무슨 타입이 들어올지 100% 확실할 때 (else가 없으면 에러날 확률이 높음)
    // 용도 3) 디버깅용, 비상용으로만 사용
    // 옛날 as 문법 <number>문자 라고 사용했어요 근데 HTML문법이랑 비슷해서 거의 안 써요 as 문법만 사용!
  }

  //💡type alias (타입변수) 타입 에일리어스
  // 타입 변수 지정할 때는 첫글자는 대문자로 많이 사용, 이름 지을 땐 뒤에 Type 붙이기

  type AnimalType = string | number | undefined;
  const ani: AnimalType = 123;
  type Study = { a: string; age: number };
  const recoil: Study = { a: "소영", age: 28 };

  //const 재할당 막기
  type Girlfriend = {
    //readonly는 읽기 전용이라 수정 못함!
    //속성 잠그기
    readonly name: string;
  };
  const girlfriends: Girlfriend = {
    name: "지영",
  };

  girlfriend.name = "민영";
  //하면 원래는 변경되는데 타입 지정해두면 못 바꿈
  // 근데 실제로는 실행 됨 ㅠ
  //object 속성 안에도 ? 사용가능 (undefind)

  //💡type alias extend (타입 합치기)
  type Name = string;
  type Age = number;
  type Person = Name | Age;

  //다른 방법 두가지 속성을 합쳐서 사용하고 싶을 때
  type PositionX = { x: number };
  type PositionY = { y: number };

  type NewType = PositionY & PositionX;
  const position: NewType = { x: 10, y: 20 };

  return <div>Study</div>;
};
