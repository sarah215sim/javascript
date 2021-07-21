/** length property 
 * 문자 수 반환
*/

var value = "ABC";
console.log(value.length); // 실행결과 3 

/* length property 활용 */

var value = "ABC";
for(var k = 0; k < value.length; k++){ // ABC 를 문자 하나씩 분리하여 반복
    console.log(value[k]); // k를 인덱스로 활용
};

// 실행결과 A / B / C

/* length 값 반환 논리 */

var value = "ABC"; // value는 이름, "ABC"는 값인 프로퍼티일 뿐인데 
console.log(value.length); // 어떻게 length가 3을 반환하는가?

// JS엔진이!!!
var obj = new String("ABC"); // 자동으로 value의 값 타입을 해석하고 타입에 맞는 인스턴스를 생성
// 가상의 obj라는 인스턴스 안에 0:"A", 0:"B", 0:"C", length: 3, [[PrimitiveValue]]:"ABC" 와 같은 값(프로퍼티)을 가진 오브젝트를 생성
// 위 값을 value.length 같은 형태로 가져올 수 있다. 여기서 value는 JS가 만든 인스턴스!

