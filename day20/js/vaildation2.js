//유효성 검사(체크)
let id = document.getElementById("user-id");
let pw1 = document.getElementById("pw1")
let pw2 = document.getElementById("pw2")

//비밀번호 정규 표현식 - 표현식 // 사이에 공백 없도록
let pw_pat1 = /[0-9A-Za-z]/;  //  ^ 문자 : 시작 의미
let pw_pat2 = /[~!@#$%^&*]/;

//onchange 속성 사용
id.onchange = checkId;  
// 함수 호출 (괄호를 생략해서 이벤트 발생시만 호출됨)
pw1.onchange = checkPw;
pw2.onchange = comparePw;

//아이디 체크 함수
function checkId(){
    if(id.value.length < 4 || id.value.length> 15){
        alert("아이디는 4자이상 15자리 이하로 입력하세요");
        id.select();
        //return false;
    }
}

//비밀번호 체크 함수
function checkPw(){
    if(pw1.value.length < 8 || !pw_pat1.test(pw1.value) 
        || !pw_pat2.test(pw1.value)){
        alert("숫자, 영 대.소문자, 특수문자 포함 8자 이상");
        pw1.select();
    }
}

//비밀번호 일치 여부
function comparePw(){
    if(pw1.value != pw2.value){
        alert("비밀번호가 일치하지 않습니다.");
        pw2.value = "";  //비밀번호 초기화
        pw1.focus();  // 커서 위치
    }
}