import React from 'react';

function Counter(props) {
  const count= 0;

  return (
    <div>
      {
        // && 연산자를 사용하여 inline if 사용
        // && 연산자를 사용한 inline if 사용 시 조건문에 falsy 연산식은 출력되지 않음, falsy 연산식의 결과값은 출력됨
        // count > 0 // 얘는 출력 안됨 (원래 연산식은 출력 안되고 결과값이 false 이기 때문에)
        count
        &&
        <h1>현재 카운트 : {count}</h1>
      }
    </div>
  );
}

export default Counter;