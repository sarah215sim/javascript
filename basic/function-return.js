/* 함수 호출 */

function setValue(one,two){
    var total = one + two ;
    console.log(total);
};

setValue(10,20); //여기서 함수 호출

// 실행결과 30

function getPoint(){
    return 10 * 30; // return 뒤에 오는 표현식의 값을 결과로 반환함. 
};

var result = getPoint(); //여기서 함수 호출 > 변수에 할당
console.log(result);

// 실행결과 300