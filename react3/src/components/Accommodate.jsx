import React, { useEffect, useState } from 'react';
import useCounter from './useCounter';

// 최대값 설정
const MAX_CAPACITY = 10;

// 함수 컴포넌트 선언
function Accommodate(props) {
  // state로 관리할 변수 선언
  const [isFull, setIsFull] = useState(false);
  // 커스텀 훅인 useCounter 를 사용하여 데이터 가져오기
  // 커스텀 훅을 통해서 현재 count 값과 count 증가함수, count 감소함수를 가져옴
  const [count, incrementCount, decrementCount] = useCounter(0);

  // Accommodate 컴포넌트 최초 호출 시 실행
  useEffect(() => {
    console.log('---------------------------------------------------');
    console.log('useEffect() 호출')
    console.log(`isFull : ${isFull}`);
  }, []);

  // 지정한 변수의 값이 변경되면 자동 호출되는 useEffect
  useEffect(() => {
    // setIsFull() 함수를 실행하여 state 에서 관리하는 isFull 의 데이터 수정
    setIsFull(count >= MAX_CAPACITY);
    console.log(`현재 count 값 : ${count}`);
  }, [count]);

  return (
    <div>
      <p>총 {count}명 수용했습니다.</p>
      <button type={'button'} className={'btn btn-primary'} onClick={incrementCount} disabled={isFull}>입장</button>
      <button type={'button'} className={'btn btn-warning ms-2'} onClick={decrementCount} disabled={isFull}>퇴장</button>
      {isFull && <p className={'text-danger'}>정원이 가득찼습니다.</p> }
    </div>
  );
}

export default Accommodate;