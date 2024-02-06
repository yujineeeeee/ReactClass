import React, { useState } from 'react';
import Toolbar from './Toolbar';

// 부모 컴포넌트
function LandingPage(props) {
  // 로그인 상태를 확인하기 위한 변수 isLoggedIn 을 useState로 관리 선언, 기본값 false
  const [isLoggedIn, setLoggedIn] = useState(false);

  // 이벤트 처리 함수 선언
  const onClickLogin = () => {
    // isLoggedIn 의 값을 수정하기 위한 setState 호출
    setLoggedIn(true);
  }

  const onClickLogout = () => {
    setLoggedIn(false);
  }

  // UI 부분
  return (
    <div>
      {/* 자식 컴포넌트인 Toolbar 호출 */}
      {/* 3개의 데이터를 자식 컴포넌트에 전달 */}
      {/* isLoggedIn : 현재 로그인 상태 정보 전달, onClickLogin : 로그인 버튼 이벤트 함수 전달, onClickLogout : 로그아웃 버튼 이벤트 함수 전달  */}
      <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
      <div className={'p-3'}>로그인 여부 확인하기</div>
    </div>
  );
}

export default LandingPage;