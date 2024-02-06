import React, { useState } from 'react';
import Child2 from './Child2';

function Parent2(props) {
  // 부모 컴포넌트의 변수 선언
  let parentValue1 = 100;
  // state로 관리되고 있는 부모 컴포넌트의 변수
  // state 로 관리되고 있는 변수는 반드시 setState() 를 통해서 변경해야 함
  const [parentValue2, setParentValue2] = useState(0);

  return (
    <div className={'m-3 p-3 border'}>
      <h3>Parent2</h3>
      <h4>부모 컴포넌트가 가지고 있는 데이터1 : {parentValue1}</h4>
      <h4>부모 컴포넌트가 가지고 있는 데이터2 : {parentValue2}</h4>
      <br/>
      {/* 자식 컴포넌트 호출 */}
      {/* 자식 컴포넌트에 데이터 2개 전달*/}
      {/* data 라는 이름으로 parentValue1 의 값을 전달*/}
      {/* setData 라는 이름으로 parentValue2의 값을 변경할 수 있는 함수를 전달 */}
      <Child2 data1={parentValue1} setData={setParentValue2} />
    </div>
  );
}

export default Parent2;