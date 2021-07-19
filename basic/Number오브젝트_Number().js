/* Built-in Number object */

/* Number() */

console.log(Number("123") + 500); // String타입의 값이 숫자면 Number로 변환
// 실행결과 623

console.log(Number("ABC")); // String타입의 값이 숫자가 아니면 변환할 수 없으므로
// 실행결과 NaN

console.log(Number(0x14)); // 0x = 16진수, 16진수를 10진수로 변환
// 실행결과 20

console.log(Number(true)); // true = 1, false = 0 변환
// 실행결과 1

console.log(Number(null)); // null = 0 변환
// 실행결과 0

console.log(Number(undefined)); // undefined타입은 정의되지 않아 변환할 수 없으므로
// 실행결과 NaN

/** Number 상수 
 * 상수는 값을 변경, 삭제할 수 없음
 * 영문 대문자 사용이 관례
*/

Number.MAX_VALUE // 1.7976931348623157 * 10(308승)
Number.MIN_VALUE // 5 * 10(-324승)
Number.NaN // Not-a-Number
Number.POSITIVE_INFINITY // Infinity
Number.NEGATIVE_INFINITY // -Infinity