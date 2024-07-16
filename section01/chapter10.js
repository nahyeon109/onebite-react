// for (초기식; 조건식; 증감식)
for (let idx = 0; idx <= 10; idx++) {
  if ( idx % 2 === 0) {
    continue; // pass
  }
  
  console.log("반복", idx);

  if (idx >= 5) {
    break; // stop
  }
}