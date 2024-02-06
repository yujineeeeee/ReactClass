import { useState } from 'react';

function useCounter(initValue) {
  // useState 를 사용하여 변수 count 를 state 로 관리 설정
  const [count, setCount] = useState(initValue);

  const incrementCount = () => setCount((count) => count + 1);

  // const incrementCount = () => {
  //   return(
  //     setCount((count) => count + 1)
  //   );
  // }

  // Math.max() : 매개변수로 입력받은 값 중 최대값으 ㄹ구하여 반환하는 함수
  const decrementCount = () => setCount((count) => Math.max(count - 1, 0));

  //  배열로 반환, 0번째 index는 현재 count 값, 1번 : count up, 2번 : count down
  return [count, incrementCount, decrementCount];
}

export default useCounter;