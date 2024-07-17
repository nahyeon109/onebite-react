// 1. 콜백함수
function main(value) {
  value();
}

main(() => {
  // console.log("I am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++){
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});

// callback 함수 사용 시, 중복 코드를 제거하고 간결하게 코드 작성 가능
