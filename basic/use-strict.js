/* use strict */

book = "책"; // var 를 쓰지 않음. JS문법은 아니나 가능한 코드
console.log(book);

// 실행결과 책


"use strict"; // 엄격한 JS문법으로 작성하겠다는 선언
try{
    book = "책"; // 에러발생
}catch(error){
    console.log(error.message);
};

// 실행결과 book is not defined
// 코딩 실수를 예방할 수 있으므로 use strict 선언은 필수.