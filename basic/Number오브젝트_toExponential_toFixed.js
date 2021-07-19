/** toExponential() 지수표기 
 * 숫자를 지수 표기로 변환 > String으로 반환
 * 파라미터로 소수 이하 자릿수 작성 (0 ~ 20)
 * 첫자리만 소수점(.)앞에 표시
*/

var value = 1234;
console.log(value.toExponential());
// 실행결과 1.234e+3 / e+정수에서 소수로 변환된 자릿수 표시

var value = 123456;
console.log(value.toExponential(3));
// 실행결과 1.235e+5 / 파라미터값에 따라 3자릿수까지 표시 4자릿수에서 반올림


/** toFixed() 고정 소숫점 표기 
 * 숫자를 고정수숫점 표기로 변환 > String으로 반환
 * 파라미터로 소수 이하 자릿수 작성 (0 ~ 20) 
*/

var value = 1234.567;
console.log(value.toFixed());
// 실행결과 1234 / 파라미터 값보다 소수 자릿수가 길면, 파라미터 지정 자릿수 다음 자릿수에서 반올림
console.log(value.toFixed(2));
// 실행결과 1234.57 
console.log(value.toFixed(5));
// 실행결과 1235.56700 / 파라미터 값보다 소수 자릿수가 작으면, 나머지를 0으로 채워서 반환 