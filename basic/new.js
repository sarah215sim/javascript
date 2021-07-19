/* new 연산자 */

var obj = new Number(); // Built-in Number object의 이름인 Number()로 인스턴스(복제)를 생성하여 obj에 반환
console.log(typeof obj);
// 실행결과 object(인스턴스 오브젝트)
// 인스턴스를 생성하는 생성자함수는 관례로 첫문자를 대문자로 작성(시맨틱)


/** 인스턴스 생성 목적 
 * 인스턴스마다 각각의 값을 갖기 위한 것
*/

var oneObj = new Number("123"); // 인스턴스를 생성하면서 고유의 이름을 갖고 있음 
console.log(oneObj.valueOf());
// 실행결과 123
var twoObj = new Number("456"); // 인스턴스를 생성하면서 고유의 이름을 갖고 있음 
console.log(twoObj.valueOf());
// 실행결과 456