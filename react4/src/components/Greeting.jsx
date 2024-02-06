import React from 'react';

// 자식 컴포넌트
function UserGreeting(props){
  return <h1>방문해주셔서 감사합니다.</h1>
}

// 자식 컴포넌트
function GuestGreeting(props){
  return <h1>회원 가입이 필요합니다.</h1>
}

// let a; // 변수 선언과 동시에 초기화하지 않았기 때문에 undefined 상태가 되어 falsy로 인식
// let b = []; // 변수 선언과 동시에 배열 타입으로 선언했기 때문에 변수 b에 데이터가 저장되어 있음, truthy
// let c = {}; // 변수 선언과 동시에 object 타입으로 선언했기 때문에 변수 c에 데이터가 저장되어 있음, truthy

// 조건부 렌더링 : 어떠한 조건에 따라서 렌더링이 달라지는 것
// 자바스크립트에서 조건식으로 데이터를 구분할 경우 true 및 false 2가지 경우로 구분할 수 있는데, 여기서 데이터에 따라 Truthy 로 구분하거나 Falsy 로 구분할 수 있음
// 간단하게 데이터가 있으면 Truthy 이고, 데이터가 없으면 Falsy 라고 할 수 있음
// truthy : true(Boolean 값 true), {}(빈 object 타입), [](빈 배열), 100, -200(0이 아닌 숫자), "0", "false"(빈 문자열이 아닌 문자열)
// falsy : false(Boolean 값 false), 0, -0(양수, 음수 상관없이 숫자 0), 0n(BigInt 0), '', "", ``(빈 문자열), null(데이터 없음), undefined(초기화되지 않음), NaN(not a number, 숫자가 아님)

// 부모 컴포넌트
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn){
    return <UserGreeting/>;
  }

  return <GuestGreeting/>;
}

export default Greeting;