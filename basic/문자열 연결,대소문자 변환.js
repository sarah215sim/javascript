/** concat() 파라미터 값을 연결하여 문자열로 반환 */

var result = "sports".concat("축구",11);
log(result);
//실행결과 : sports축구11 (작성한 순서대로 연결)


var obj = new String(123);
log(obj.concat("ABC"));
//실행결과 : 123ABC (단순히 인스턴스 obj에 concat한 것 처럼 보이지만 인스턴스 프리미티브값에 설정된 123에 연결한 것임)

/** toLowerCase 대문자를 소문자로 */
log("ABCDE".toLowerCase());
//실행결과 : abcde

/** toUpperCase 소문자를 대문자로 */
log("abcde".toUpperCase());
//실행결과 : ABCDE
