import React, { useEffect, useMemo, useState } from 'react';

function HookUseMemo2(props) {

  // state 로 변수 number 관리 설정
  const [number, setNumber] = useState(0); // useState 쓰면 값 바뀔때마다 화면을 새로 들고옴
  const [isType, setIsType] = useState(true);

  // setState() 가 동작하여 UI 화면을 새로 그릴 때 isType 의 값을 확인해서 object 타입의 변수 food 의 데이터를 연산하여 가져옴
  // useEffect 의 의존성 배열에 변수 food 를 등록하였기 때문에 화면 업데이트 시 마다 useEffect 가 호출됨
  // const food = { type: isType ? '찍먹' : '부먹'}; // 화면이 refresh 될 때 마다 들고 오기 때문에 계속 새로 들고옴

  const food = useMemo(() => {
    return { type: isType ? '찍먹' : '부먹'};
  }, [isType])

  // useEffect 의 두번째 매개변수인 의존성 배열에 등록된 변수의 데이터가 변경될 경우 useEffect 가 동작함
  useEffect(() => {
    console.log('componentDidUpdate 역할의 useEffect 호출');
  }, [food]);

  return (
    <div>
      <h3>숫자 카운트</h3>
      <input type={'number'} className={'form-control'} value={number} onChange={(e) => {
        setNumber(e.target.value);
      }}/>
      <br/>
      <h3>boolean 값 변경</h3>
      <p>찍먹 vs 부먹 : <span className={'fs-3'}>{food.type}</span></p>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        setIsType(!isType);
      }}>클릭</button>
    </div>
  );
}

export default HookUseMemo2;