/** 인덱스로 문자열 처리 */

/** charAt() 파라미터의 인덱스번째 문자 반환 */
var value = "sports";
log(value.charAt(1)); // 실행결과 : p
log(value[1]); // 실행결과 : p (ES5부터 사용 가능)
log(value.charAt(12)); // 실행결과 : "" (인덱스가 문자열의 길이보다 크면 빈문자열 반환)
log(value[12]); // 실행결과 : undefined (빈문자열도 값이기 때문에 시맨틱적으로 undefined가 적절함)

/** indexOf() 파라미터의 문자열과 동일한 첫 번째 인덱스를 반환 */
var value = "123123";
log(value.indexOf(2)); //실행결과 : 1 (value에 2가 두 개지만 첫 번째 인덱스만 반환함)
log(value.indexOf(23)); //실행결과 : 1 (발견된 첫 번째 인덱스만 반환함)
log(value.indexOf(15)); //실행결과 : -1 (같은 문자열이 없으면 -1을 반환)
log(value.indexOf(2,3)); //실행결과 : 4 (두번째 파라미터를 작성하면 두번째 파라미터 인덱스부터 검색)
log(value.indexOf(2,-1)); //실행결과 : 1 (두번째 파라미터가 0보다 작으면 처음부터 검색)
log(value.indexOf(2,9)); //실행결과 : -1 (두번째 파라미터가 length보다 크면 -1 반환)
log(value.indexOf(2,"A")); //실행결과 : 1 (두번째 파라미터가 NaN면 처음부터 검색)

// indexOf의 주요목적 
// 1. 같은 문자열 어디에 있는지 찾기 
// 2. 같은 문자열이 있는지 없는지 확인 (if... 있으면 0~ / 없으면 -1) 
 
/** lastIndexOf() 파라미터의 문자열과 동일한 첫 번째 인덱스를 반환, 단!! 뒤에서 부터 검색 */
var value = "123123";
log(value.lastIndexOf(2)); //실행결과 : 4 
log(value.lastIndexOf(1,4)); //실행결과 : 3 (두번째 파라미터를 작성하면 그 인덱스부터 + 뒤에서 부터 검색) 
log(value.lastIndexOf(2,-1)); //실행결과 : -1 (두번째 파라미터가 0보다 작으면 처음부터 검색함) 

