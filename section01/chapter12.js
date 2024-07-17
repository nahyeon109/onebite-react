function funcA() {
  // console.log("funcA");
}

let varA = funcA;
varA;

let varB = function () { // 익명함수 -> 이름이 없는 함수
  // console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = () => {
  return 1;
};

let varD = (value) => value + 1;


console.log(varD(10));

