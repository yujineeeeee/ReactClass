import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

// 함수 컴포넌트에서 이벤트 사용하기
// 1. UI가 있는 JSX 문법에서 html 태그의 이벤트 속성을 JSX 문법으로 변경한 이벤트 속성을 사용함
// 2. 컴포넌트 안에 function 키워드를 사용한 함수나 화살표 함수를 사용한 함수를 미리 선언
// 3. JSX 문법을 사용한 태그의 이벤트 속성에 미리 선언한 함수를 입력하여 이벤트 동작
// 3-1. JSX 문법을 사용한 태그의 이벤트 속성에 직접 콜백함수로 입력하여 이벤트 동작
function Event1(props) {

  const [isToggleOn, setIsToggleOn] = useState(false);

  // function 키워드로 함수 선언 시
  function handleClick() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  // 화살표 함수로 선언 시
  // const handleClick = () => { setIsToggleOn((isToggleOn) => !isToggleOn) }

  const handleDelete = (id, event) => {
    // 매개변수 event를 통해서 실제 이벤트가 발생한 대상을 찾을 수 있음
    alert(`id : ${id}, target : ${event.target}`);
  }

  return (
    <div>
      <button type={'button'} className={'btn btn-primary me-3'} onClick={handleClick}>{isToggleOn ? '켜짐' : '꺼짐'}</button>
      <Button type={'button'} className={'btn btn-primary'} onClick={() => {
        setIsToggleOn((isToggleOn) => isToggleOn);
      }}>{isToggleOn ? '켜짐' : '꺼짐'}</Button>
      <br/><br/>
      {/* 콜백함수의 매개변수로 사용된 event 는 실제로 html 문서에서 동작한 이벤트 */}
      <button type={'button'} className={'btn btn-primary'} onClick={(event) => {
        // 실제 이벤트 발생 시 동작할 함수, 매개변수로 이벤트 객체와 추가되는 데이터를 넘길 수 있음
        // 매개변수의 입력 순서는 상관없음
        handleDelete(1, event);
      }}>매개변수가 있는 버튼 이벤트</button>

    </div>
  );
}

export default Event1;