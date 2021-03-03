/*
//함수 선언
function greeting(sentence){
  console.log('Hi');
  console.log('안녕');
  console.log(sentence);
}

//함수 호출
greeting('Hola');

function welcome(name){
  console.log('안녕하세요 '+name+ '님!');
}

welcome('코드잇');

function printSquare(x){
  console.log(x*x);
}

printSquare(2);

//숫자형

console.log(1+8);

//불린형
console.log(3 >= 2); //등호를 항상 = 앞에 써주어야 한다.
console.log(3 === 3); // ===는 일치한다는 기호
console.log(3 !== 3);

//앤드 연산자 &&
//오어 연산자 ||
//낫 연산자 !
console.log(!ture);
console.log(!!ture); //true의 반대의 반대
*/
//type of 연산자
console.log(typeof 101);
console.log(typeof 1.0); //자바스크립트는 정수와 자연수를 차별하지 않음.
console.log(typeof 'Codeit');
console.log(typeof true);

let name = 'Codeit';
function sayHello(){
  console.log('Hello');
};

console.log(typeof name);
console.log(typeof sayHello);

console.log(typeof 'Hello' + 'Codeit'); //StringCodeit
console.log(typeof ('Hello' + 'Codeit'));
console.log(typeof 8 - 3); // not a number
console.log(typeof (8 - 3));

