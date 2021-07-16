/* throw */

try{
    throw "예외발생"; // 예외(오류)를 의도적,명시적으로 발생시킴
    var sports = "스포츠"; //throw를 만나면 catch블록이 실행되므로 아래의 코드는 실행되지 않음
}catch(error){
    console.log(error); // throw의 표현식의 문자열을 가져옴
    console.log(sports); // sports변수가 선언되지 않아서 undefined출력
};

// 실행결과 예외발생 / undefined


try{
    throw{
        msg: "예외발생", // throw 표현식에 오브젝트(property)를 문장으로 작성한 형태
        bigo: "임의의 이름" // {name:메세지} = {key:value}형태
    };
}catch(error){
    console.log(error.msg);
    console.log(error.bigo);
};

// 실행결과 예외발생 / 임의의 이름


try{
    throw new Error("예외발생"); // 새로운 오브젝트로 작성한 형태
}catch(error){
    console.log(error.message); // error.message 에 새로운 오브젝트 Error의 파라미터값이 설정됨.
};

// 실행결과 예외발생