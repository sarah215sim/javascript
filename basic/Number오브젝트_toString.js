/* Built-in Number object  -  toString */

var value = 20;
console.log(20 === value.toString()); // ===일치연산자 / toString오브젝트가 value의 값인 20을 string으로 변환 했으므로 false
console.log(value.toString(16)); // value의 값인 20을 16진수인 string로 변환했으므로 14


var value = 20;
var valueToStiring = value.toString(16);
console.log(valueToStiring); // 실행결과 14
console.log(typeof valueToStiring); // 실행결과 string


/* 변수가 아닌 숫자자체에 toString을 사용하는 경우, 유동소수점 사용 주의 사항 */

// console.log(20.toString()); // 오류발생 .을 유동소수점(즉, 20.0으로 인식하므로)
console.log(20..toString()); // 첫번째 .은 유동소수점 / 두번째 .은 값과 함수를 구분하는 문법(.toString())
// IEEE754 규정은 준수하기 때문에 발생 = JS는 실수로 처리하기 때문(20이 정수가 아닌 실수라는 뜻)