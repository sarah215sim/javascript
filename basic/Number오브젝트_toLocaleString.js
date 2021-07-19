/* Built-in Number object  -  toLocaleString() 
* 숫자를 브라우저가 지원하는 지역문자로 변환
* 브라우저가 지역화를 지원하지 않는 경우, toString()으로 변환
*/


var value = 1234.56;
console.log(value.toLocaleString()); // 한국식 1,234.56
console.log(value.toLocaleString('de-DE')); // 독일실 1.234,56
console.log(value.toLocaleString('zh-Hans-CN-u-nu-hanidec')); // 중국식 一,二三四.五六

// ES5 : 파라미터 사용 불가
// ES6 : 파라미터에 언어 타입 사용 가능