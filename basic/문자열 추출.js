/** substring() 파라미터의 시작 인덱스부터 끝 인덱스 !직전! 까지 반환 */

var value = "01234567";
log(value.substring(2,5)); //실행결과 : 234
log(value.substring(5)); //실행결과 : 567 (두번째 파라미터가 없으면 끝까지 반환)
log(value.substring()); //실행결과 : 01234567 (파라미터를 작성하지 않으면 전체 반환)
log(value.substring(5,20)); //실행결과 : 567 (두번째 파라미터가 전체 length보다 크면 전체 반환)
log(value.substring(-7,2)); //실행결과 : 01 (파라미터 값이 음수면 0으로 간주)
log(value.substring(5,1)); //실행결과 : 1234 (첫번째 파라미터 값이 두번째보다 크면 두 값을 바꿔서 1,5로 처리)
log(value.substring(5,"A")); //실행결과 : 01234 (NaN는 0으로 간주)

/** substr() 파라미터의 시작 인덱스부터 '지정한 문자 수'를 반환 */

var value = "01234567";
log(value.substr(0,3)); //실행결과 : 012
log(value.substr(-3,3)); //실행결과 : 567 (첫번째 파라미터가 음수면 length에서 파라미터값을 더해 시작 인덱스로 사용)
log(value.substr(4)); //실행결과 : 4567 (두번째 파라미터를 작성하지 않으면 전체 반환)
log(value.substr()); //실행결과 : 01234567 (파라미터를 작성하지 않으면 전체 반환)

/** slice() 파라미터의 시작 인덱스부터 끝 인덱스 !직전! 까지 반환 */

var value = "01234567";
log(value.slice(1,4)); //실행결과 : 123
log(value.slice(false,4)); //실행결과 : 0123 (false, undefined, null, 빈문자열은 0으로 간주)
log(value.slice("A")); //실행결과 : 01234567 (첫번쨰 파라미터가 NaN면 0으로 간주)
log(value.slice()); //실행결과 : 01234567 (파라미터를 작성하지 않으면 전체 반환)
log(value.slice(5)); //실행결과 : 567 (두번째 파라미터를 작성하지 않으면 length = 8을 사용)
log(value.slice(5,3)); //실행결과 : "" (첫번째 파라미터가 두번째보다 크거나 같으면 빈 문자열 반환)
log(value.slice(4,-2)); //실행결과 : 45 (파라미터 값이 음수면 length에 더해서 사용)
log(value.slice(-5,-2)); //실행결과 : 345 (8-5=3,8-2=6 즉, (3,6) 3에서부터 !직전!인 5까지 반환)
log(value.slice(-2,-5)); //실행결과 : "" (8-2=6,8-5=3 즉, (6,3) 첫번째 파라미터 값이 더 크므로 빈문자열 반환)