
/* 코딩시간 2021.07.15
* for문을 사용하여
    - 1에서 50까지 반복하면서 : for문 var i = 1;
    - 홀수번째 값과 : var odd; / if문 혹은 조건3항연산자
    - 짝수번째 값을 누적하고 : var even; 
    - 반복한 값을 누적합니다 : var result; / += 복합할당연산자 
* 반복을 완료하면
    - 누적한 홀수번째 값과
    - 누적한 짝수번쨰 값을 출력하고
    - 누적한 반복값을 출력합니다 : console.log();
*/


/* 나머지연산자% & if문 활용방법 */
var odd = 0; //홀수 값
var even = 0; //짝수 값
var result = 0; //누적값
for(var i = 1; i < 51; i++){
     if(i % 2 === 0){
        even = even + i;
     }else{
        odd = odd + i;
     };
     result = result + i;
}; 
console.log(odd, even, result);

/* 콤마 & 복합할당연산자(+=) & 조건3항연산자(exp?exp-1:exp-2) 활용방법 */
var i = 0; odd = 0, even = 0,result = 0; //홀수값, 짝수값, 누적값 
for(; i < 51; i++){
    i % 2 === 0? even += i : odd += i;
    result += i;
};
console.log(odd, even, result);