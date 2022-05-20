// 덧셈 프로그램 
let n1 = parseInt(prompt("첫 번째 수 입력 : ")) ;
let n2 = parseInt(prompt("두 번째 수 입력 : ")) ;
let sum_v = 0;

//연산
// 입력 받은 문자를 정수로 변환함
// sum_v = parseInt(n1) + parseInt(n2) ; // 이렇게도 가능
sum_v = n1 + n2;


//출력
document.write("두 수의 합 : " + sum_v);