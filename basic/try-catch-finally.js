/* try-catch finally */

var value;
try{
    value = ball; // ball이라는 변수가 없으므로 예외 발생
}catch(error){
    console.log("catch 실행"); // 예외 발생했으니 catch 실행
}finally{
    console.log("finally 실행"); // 예외 발생여부 상관없이 finally 실행
};

// 실행결과  catch 실행 / finally 실행 
