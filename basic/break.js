/* break */

var k = 0, m = 0;
while(k<3){
    m++;
    if (m === 2){
        break;
    };
    console.log(m);
};

// 실행결과 : 1
// break가 실행되는 순간, while반복문을 종료함. 따라서 console.log(m)을 실행하지 않음

for (var k = 0; k < 3; k++){
    if(k === 1){
        break
        console.log("K === 1");
    };
    console.log(k);
};

// 실행결과 : 0
// break 뒤에 세미콜론을 첨부하지 않아도 JS에서 자동첨부 후, 문장으로 끊어서 인식
// break가 실행되는 순간, for반복문을 종료함. 따라서 console.log("K === 1");을 실행하지 않음
