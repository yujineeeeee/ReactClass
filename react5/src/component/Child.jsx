import React from 'react';

function Child(props) {
  // 부모 컴포넌트에서 전달된 데이터는 모두 props 객체에 저장되어 전달됨
  return (
    <div>
      {/* 부모 컴포넌트에서 전달받은 데이터는 모두 props.속성명으로 데이터를 가져올 수 있음 */}
      <h2>전달받은 값 : {props.data}</h2>
    </div>
  );
}

export default Child;