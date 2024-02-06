import React, { useCallback, useMemo, useState } from 'react';

// memoization : 동일한 계산을 반복해야 할 경우, 이전에 계산한 값을 메모리에 저장하고 동일한 계산의 반복 수행을 제거하여 프로그램의 실행 속도를 빠르게 하는 기술
// useMemo : 리액트에서 제공하는 memoization 기능을 제공하는 hook, 최적화 작업을 위해서 사용함
// 사용법 :
// useMemo(memo 콜백함수, 의존성 배열);

function HookUseMemo(props) {

  const [btnX, setBtnX] = useState(0);
  const [btnY, setBtnY] = useState(0);

  // 메모로 지정해 놓은 변수의 데이터가 수정될 경우 전체 화면을 다시 그려줌
  // 메모로 지정하지 않은 변수의 데이터가 수정될 경우 메모로 지정한 변수만 빼고 다시 그림
  useMemo(() => {
    console.log(btnX);
  }, [btnX]);

  // useCallback : useMemo와 같이 memoization 기능을 제공하지만 함수를 반환함
  const returnFunc = useCallback(() => {
    console.log(btnX);
  }, [btnX]);

  return (
    <div>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        setBtnX((prev) => prev + 1); // prev : 이전 상태정보
      }}>useMemo 사용</button>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        setBtnY((prev) => prev + 1);
      }}>useMemo 미사용</button>
    </div>
  );
}

export default HookUseMemo;