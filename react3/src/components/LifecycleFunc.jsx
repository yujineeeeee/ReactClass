import React, { useEffect, useState } from 'react';

function LifecycleFunc(props){
  let num1;
  let [num2, setNum2] = useState();

  const [update, setUpdate] = useState('');

  useEffect(() => {
    num1 = 1000;
    num2 = 2000;
    console.log(`num1 : ${num1}, num2 : ${num2}`);
  }, []);

  useEffect(() => {
    console.log('화면 업데이트 후 자동 실행되는 useEffect');
  }, [num2]);

  return (
    <div>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        setNum2(num2 + 1);
        console.log(num2);
      }}>화면 업데이트</button>
      <p>num1 : {num1}</p>
      {console.log(num1)}
      <p>num2 : {num2}</p>
      {console.log(num2)}
    </div>
  );
}

export default LifecycleFunc;

// 문제1) 버튼 2개를 생성하고 (+, -) useState와 useEffect를 사용하여 볼륨값을 조절하는 프로그램을 작성하세요
// 컴포넌트명 : VolumeControl
// state 변수명 : volume
// volume 의 초기 값 = 0, 기본값 = 5, 최대값 = 10, 최소값 0