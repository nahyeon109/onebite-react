// 1. 변수 - 값을 바꿀 수 있음
let age;

age = 30;

// 2. 상수 - 한번 저장된 값을 바꿀 수 없음
const birth = '1998.01.09';

// 3. 변수 명명규칙(네이밍규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.
// let if; - X

// 4. 변수 명명 가이드 - 의미있고 친절하게 명명
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;