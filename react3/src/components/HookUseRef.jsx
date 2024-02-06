import React, { useRef } from 'react';

// useRef : 특정 컴포넌트에 접근할 수 있도록 해주는 리액트 hook
// 사용법 :
// const 변수명 = useRef(초기값);
function HookUseRef(props) {

  // useRef 를 사용하여 사용할 태그를 지정, 초기값으로 null을 사용하여 빈 태그로 설정
  const inputBox = useRef(null);

  const onButtonClick = () => {
    inputBox.current.focus();
  }

  return (
    <div>
      <input type={'text'} className={'form-control mb-3'}/>
      {/* jsx 문법으로 useRef 를 태그에 지정 */}
      <input type={'text'} className={'form-control mb-3'} ref={inputBox} placeholder={'아래 버튼 클릭 시 포커스를 받는 태그'}/>
      <button type={'button'} className={'btn btn-primary'} onClick={onButtonClick}>클릭 시 포커스 이동</button>
    </div>
  );
}

export default HookUseRef;