import React from 'react';

// inline if : if 문이 필요한 JSX 문법 안에 조건식을 사용하여 조건식 렌더링을 하는 것
// if 문을 사용하는 것이 아니라 && 를 사용하여 if 문과 동일한 효과를 얻음
// 단축 평가 : && (논리곱) 연산 시 && 연산자 왼쪽에 있는 연산 결과가 false 일 경우 && 연산자 오른쪽에 있는 연산식의 결과에 상관 없이 무조건 전체 결과가 false 가 되므로 && 연산자 오른쪽에 있는 연산식을 연산하지 않음
function Mailbox(props) {
  const unreadMessage = props.unreadMessages;

  return (
    <div>
      <h1>안녕하세요</h1>
      {
        // jsx 문법 내에서는 일반 if문 사용할 수 없음
        unreadMessage > 0
        &&
        <h2>현재 {unreadMessage}개의 읽지 않은 메일이 있습니다.</h2>
      }
    </div>
  );
}

export default Mailbox;