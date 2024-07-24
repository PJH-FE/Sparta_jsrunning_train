//1. 빈칸 채우기 문제
//아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지 본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
// 변수가 할당되어 있지 않고, 개발자의 의도적인 공백이 아니기에 undefined가 출력됩니다.

const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// const는 변수 재할당이 안되기 때문에 에러가 나옵니다.


let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// index는 0부터 시작하기에 [0, 1, 2, 3, 4, 5] 에서 3에 해당하는 19가 출력됩니다.



let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false >

// ""은 falsy한 값이라 
// console.log(mySchedule || false) 는 false || false  => false
// console.log(!!mySchedule) 는 !!false => !true => false