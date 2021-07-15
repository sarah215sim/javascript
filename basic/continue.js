/* continue */

for (var k = 0; k < 5; k++){
    if (k === 2 || k === 3){ //논리OR연산자
        continue;
    };
    console.log(k);
};

// 실행결과 0 / 1  / 4
// continue가 실행되는 순간, 반복문의 처음(k++)으로 분기(이동) 
