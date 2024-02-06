import React from 'react';

// 자식 컴포넌트
// 부모 컴포넌트에서 데이터 3가지를 전달 받음
// 전달된 데이터 : isLoggedIn, onClickLogin, onClickLogout
function Toolbar(props) {
  // 전개 연산법을 사용하여 부모한테서 전달받은 object 타입의 데이터 props 를 한번에 키명과 동일한 변수에 대입함
  const {isLoggedIn, onClickLogin, onClickLogout} = props;

  return (
    <div>
      {/* inline if 를 사용하여 화면에 내용 출력*/}
      {/* isLoggedIn 값이 true 이면 && 연산자 뒤의 내용 화면 출력, false 이면 출력 안함 */}
      { isLoggedIn && <span className={'me-3'}>환영합니다.</span> }
      {
        // 삼항 연산자를 사용하여 inline if ~ else 를 구현
        // isLoggedIn 값이 true 이면 로그아웃 버튼 출력, false 이면 로그인 버튼 출력
        isLoggedIn
        ? (<button type={'button'} className={'btn btn-primary'} onClick={onClickLogout}>로그아웃</button>)
        : (<button type={'button'} className={'btn btn-warning'} onClick={onClickLogin}>로그인</button>)
      }
    </div>
  );
}

export default Toolbar;