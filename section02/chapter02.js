function resturnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

console.log(resturnFalse() && returnTrue()); 
console.log(returnTrue() || resturnFalse()); 
// ->  단락 평가 : 첫번째 피연산자의 값만으로도 결과가 나온다면 두번째 피연산자에는 접근도 하지 않기 때문에 returnTrue 함수는 호출생략 됨


function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "김나현"});