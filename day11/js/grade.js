// 입력 (변수 선언 및 값 저장)
let score = 75;
let grade = "";  // 문자형 변수 초기화

// 연산 조건문 출력
if(score >= 90 && score <= 100){
    grade = "A";
}
else if(score >= 80 && score < 90 ){
    grade = "B";
}
else if(score >=70 && score < 80){
    grade = "C";
}
else if(score >= 60 && score < 70){
    grade = "D";
}
else{
    grade = "F";
}
document.write("학점은 <span>" + grade + "</span>입니다.");