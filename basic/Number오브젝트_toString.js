/* Built-in Number object  -  toString */

var value = 20;
console.log(20 === value.toString()); // ===일치연산자 / toString오브젝트가 value의 값인 20을 string으로 변환 했으므로 false
console.log(value.toString(16)); // value의 값인 20을 16진수인 string로 변환했으므로 14


var value = 20;
var valueToStiring = value.toString(16);
console.log(valueToStiring); // 실행결과 14
console.log(typeof valueToStiring); // 실행결과 string
