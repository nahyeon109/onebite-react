// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; // 양의 무한
let mInf = -Infinity; // 음의 무한

let nan = NaN; // 연산 실패 시 반환, Not a Number


// 2. String Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation; // 덧셈 연산도 지원

let introduceText = `${myName}은 ${myLocation}에 거주합니다`; // 템플릿 리터럴 문법


// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;


// 4. Null Type (아무것도 없다)
let empty = null;


// 5. Undefined Type
let none;

// [null] vs [Undefined]
// null : 명시적으로 변수에 할당해준 값
// Undefined : 아무런 값도 할당하지 않았을 때, 자동으로 들어가는 값