/* switch */

var exp = 1;
switch(exp){
    case 1:
        console.log(100);
    case 2:
        console.log(200);
};

// 실행결과 100 / 200
// 일치하는 case 아래의 모든 문장을 수행하므로 200도 출력됨

var exp = 1;
switch(exp){
    case 1:
        console.log(100);
        break;
    case 2:
        console.log(200);
};

// 실행결과 100
// break문을 만나 switch문 밖으로 빠져나감


var exp = 7, value;
switch(exp){
    case 1:
        value = 100;
    default:
        value = 700;
    case 2:
        value = 200;
};
console.log(value);

// 실행결과 200
// case와 마찬가지로 default 아래의 모든 문장을 수행하므로 200 출력


var exp = 3;
switch(exp){
    case 2:
    case 3:
        console.log(100);
};

// 실행결과 100
// OR(||)형태 : exp 값이 2 또는 3 이면 문장실행