

let area1 = getArea(10, 20); // 괄호 안 -> 인수
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 함수 선언
// 호이스팅 
// -> '끌어올리다' 라는 뜻
function getArea(width, height) { // 괄호 안 -> 매개변수
  function another() { // 중첩함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area; // 반환값
}