/** String() */

var value = String(123);
console.log(value); // 실행결과 123
console.log(typeof value); // 실행결과 string (가독성을 위해 이 형태로 사용 권장)
console.log(typeof ("" + 123)); // 실행결과 string

/** new String()
 * 새로운 String 인스턴스를 생성하여 반환
 */

var obj = new String(123);
console.log(typeof obj); // 실행결과 object


/** valueOf() 
 * String 인스턴스의 프리미티브 값 반환
*/
var obj = new String(123);
console.log(obj.valueOf()); // 실행결과 123
