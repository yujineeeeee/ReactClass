import React, { useState } from 'react';

// 자식 컴포넌트
function LoginButton(props){
  // 부모가 전달해준 데이터의 이름이 onClick 이고 실제 전달된 내용은 함수임
  // 사용 시 props.onClick 라는 이름으로 사용
  return (
    <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그인</button>
  );
}

// 자식 컴포넌트
function LogoutButton(props) {
  return (
    <button type={'button'} className={'btn btn-warning'} onClick={props.onClick}>로그아웃</button>
  );
}

// 부모 컴포넌트
function LoginControl(props) {
  // isLoggedIn 변수를 state 로 관리하도록 설정
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 이벤트 처리 함수 선언
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  // 엘리먼트 변수 선언, 실제로는 일반적인 자바스크립트 변수
  // 변수에 저장되는 내용이 JSX 문법으로 만들어진 태그가 저장된 변수
  // 일반 자바스크립트 변수에 리액트 컴포넌트가 저장되면 해당 변수를 엘리먼트 변수라고 함
  let button;

  // 조건부 렌더링 연산, state 로 관리되는 isLoggedIn 변수의 값이 true/false 에 따라서 저장되는 컴포넌트가 변경됨
  if (isLoggedIn){
    // LogoutButton, LoginButton 컴포넌트에 전달할 데이터의 이름으로 onClick 을 설정
    // onClick 라는 이름으로 handleLogoutClick,handleLoginClick 함수를 자식 컴포넌트에게 전달함
    button = <LogoutButton onClick={handleLogoutClick}/>
  }
  else {
    button = <LoginButton onClick={handleLoginClick}/>
  }

  // 엘리먼트 변수를 사용하여 조건부 렌더링
  return (
    <div className={'mt-4'}>
      {/* JSX 문법 중간에 {} 사용 시 javascript 코드 사용 가능 */}
      {/* 변수 button 은 리액트 컴포넌트가 저장된 엘리먼트 변수 */}
      {/* <LogoutButton onClick={handleLogoutClick}/> 이라는 컴포넌트가 출력 */}
      {button}
    </div>
  );

//   엘리먼트 변수를 사용하지 않고 직접 자식 컴포넌트를 호출
//   if (isLoggedIn){
//     return (
//       <div className={'mt-4'}>
//         <LogoutButton onClick={handleLogoutClick} />
//       </div>
//     );
//   }
//   else {
//     return (
//       <div className={'mt-4'}>
//         <LoginButton onClick={handleLoginClick} />
//       </div>
//     );
//   }
}

export default LoginControl;






















