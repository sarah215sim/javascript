/* 오브젝트 - 프로퍼티 추출(열거) */

var sports = {
    soccer : "축구",
    baseball : "야구"
}; // 오브젝트 생성

for (var item in sports){ // sports라는 오브젝트에서 name을 가져와 item변수에 할당
    console.log(item); // 실행결과 sports의 name = soccer
    console.log(sports[item]); //실행결과 sports의 name의 값 = 축구
    // for문이니까 sports오브젝트의 프로퍼티 마다 반복
};

// 최종 실행결과 soccer / 축구 / baseball / 야구
