import React, { useState } from 'react';
import Greeting from './Greeting';


// inline if ~ else : if ~ else 문이 필요한 JSX 문법 안에 삼항연산자를 사용하여 조건식 렌더링을 하는 것

// 자식 컴포넌트
function LoginButton(props) {
  return (
    <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그인</button>
  );
}

function LogoutButton(props) {
  return (
    <button type={'button'} className={'btn btn-warning'} onClick={props.onClick}>로그아웃</button>
  );
}

function LoginControl2(props) {
  // isLoggedIn 변수를 state 로 선언하여 상태 관리, 초기값 false
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 이벤트 처리 함수 선언
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {
        // jsx 문버에서는 일반 if 문을 사용할 수 없으므로 삼항연산자로 대체하여 사용
        isLoggedIn
          ? <LogoutButton onClick={handleLogoutClick} />
          : <LoginButton onClick={handleLoginClick} />
      }
    </div>
  );
}

export default LoginControl2;