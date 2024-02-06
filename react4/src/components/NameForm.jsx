import React, { useState } from 'react';

// 리액트에서 form 태그 사용 시 html 과 달리 컴포넌트에 state 를 사용하여 form 태그의 데이터를 저장해야 함
// html 태그는 기본적으로 상태 정보를 가지고 있으나 리액트의 jsx 로 만들어진 태그에는 상태정보를 자체적으로 저장할 수 없음
// useState() 를 사용하여 form 태그가 저장할 데이터를 state 객체의 변수로 각각 선언해야 함
function NameForm(props) {
  // input 태그에 사용할 변수 선언, useState 를 사용하여 state 로 상태 관리, 초기값 ''(빈 문자열)
  const [inputValue, setInputValue] = useState('');

  // 이벤트 처리 함수 선언
  // 매개변수로 event 객체를 받음
  const handleChange = (event) => {
    // event.target 사용 시 해당 이벤트가 발생된 html 태그를 뜻함
    // event.target.value : 해당 이벤트가 발생된 html 태그의 value 속성값을 가져옴
    // setState() 를 통해서 값을 변경
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert(`입력한 이름 : ${inputValue}`);
    // 현재 동작한 이벤트 중지
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={'my-3'}>
        <label className={'form-label'}>이름 : </label>
        {/* input 태그의 value 속성의 기본값은 '', value에 값을 입력 시 기본값으로 화면에 출력 */}
        {/* 리액트에서는 state 로 관리하고 있는 변수를 value 속성의 값으로 사용 */}
        {/* onChange 이벤트를 통해서 value 값을 변경 */}
        <input type={'text'} className={'form-control'} value={inputValue} onChange={handleChange}/>
      </div>
      <button type={'submit'} className={'btn btn-primary'}>확인</button>
    </form>
  );
}

export default NameForm;