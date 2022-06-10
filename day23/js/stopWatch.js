let time = 0;
let sw = true;
$(document).ready(function(){
    stopWatch();

function init(){
    document.getElementById("time").innerHTML = "00: 00 : 00" ;
}

//stopWatch 함수
function stopWatch(){
    let hour = 0, min = 0, sec = 0;
    let timer;
    
    //재생
    $("#startBtn").click(function(){
        if(sw){
            $(".fa-solid").css("color", "#f60")
            this.style.color = "#555";
            sw = false; 

            if(time == 0){
                init();
            }
            
            timer = setInterval(function(){
                time++; // 1초 증가

                min = Math.floor(time/60);  // 분
                hour = Math.floor(min/60);  // 시간
                sec = time % 60;  // 초
                min = min % 60;  // 분- 분을 나눈 나머지

                let th = hour;
                let tm = min;
                let ts = sec;

                if(th < 10){  // 0~ 9 
                    th = "0" + hour;
                }
                if(tm < 10){
                    tm = "0" + min;
                }
                if(ts < 10){
                    ts = "0" + sec;
                }

                document.getElementById("time").innerHTML = th + " : " + tm + " : " + ts ;
            },1000); // setInterval() -> 1초로 설정
        }
    });
    
    //일시 중지 - pause
    $("#pauseBtn").click(function(){
        if(time != 0){
            $(".fa-solid").css("color", "#f60")
            this.style.color = "#555";
            clearInterval(timer);  // timer 중지
            sw =true;  // false -> true
        }
    });

    //정지
    $("#stopBtn").click(function(){
        if(time != 0){
            $(".fa-solid").css("color", "#f60")
            this.style.color = "#555";
            clearInterval(timer);
            sw =true;
            time = 0;  // 완전멈춤
            init();
        }
    });
}
});