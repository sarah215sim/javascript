/** trim() 
 * 문자열 앞뒤의 화이트 스페이스 삭제
*/

var value = "  abcd  ";
console.log(value.length); // 실행결과 8
console.log(value.trim().length); // 실행결과 4 

// trim도 length와 마찬가지로 JS엔진이 value의 인스턴스를 생성해 abcd를 값으로 저장하므로
// 새로운 value인스턴스의 length를 구하게 되는 원리ㅣ
// 이처럼 .으로 이루어진 문장을 '메소드 체인 Method chain' 이라고 함
