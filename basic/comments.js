/* 주석 작성 사례 */

/**
 * @function calculateAmount
 * 1. 파라미터로 받은 수량과 단가를 곱해 금액을 계산하고 결과값을 반환한다.
 * 2. 수량과 단가의 0체크는 함수를 호출하기 전에 하므로 체크하지 않는다.
 * @param {Number} quantity, 수량
 * @param {Number} price, 단가
 * @return {Number} 계산 결과
 */

function calculateAmount(quantity,price){
    return quantity * price ;  //함수코드 작성
};