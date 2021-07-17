/* 오브젝트 - 프로퍼티 */

var book = { 
    title : "책", // name(key) : value
    point : 123 // 원래는 "point" : 123 으로 작성해야함. JS가 따옴표를 알아서 해석해줌
};


var book = {
    title : "책",
    point : { // 프로퍼티 값(value)의 위치에 오브젝트{중괄호}를 작성해 프로퍼티를 확장한 경우
        ten : 10,
        bonus : 200,
        promotion : function(){}
    }
};

/* 프로퍼티 추가,변경 */

var book = {}; //오브젝트 생성
book.title = "JS책"; // .name = value 로 추가,변경
console.log(book);

//실행결과 {title: "JS책"}

var book = {}; //오브젝트 생성
book["title"] = "JS책"; // ["name"] = value 로 추가,변경
console.log(book);

// 실행결과 {title: "JS책"}

var book = {title : "JS책"}; //오브젝트 생성
var varName = "title"; // name을 변수로 할당
book[varName] = "HTML책"; // [name변수] = value 로 추가,변경
console.log(book);