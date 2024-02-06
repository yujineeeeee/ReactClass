import React from 'react';

function Child2(props) {

  // 자식 컴포넌트인 Child2는 부모 컴포넌트인 Parent2 에서 전달받은 데이터는 data1, setData2 가 됨
  //  data1에는 부모 컴포넌트의 parentValue1의 값이 들어있고,
  //  setDate에는 부모 컴포넌트이 parentValue2 의 값을 수정할 수 있는 함수 setParentValue2()가 들어있음
  // 자식 컴포넌트에서 props.setData2(수정할 데이터) 를 실행 시 부모 컴포넌트의 parentValue2의 값이 수정됨
  // 부모 컴포넌트가 자신의 변수를 수정할 수 있는 함수를 자식 컴포넌트에 전달하여 자식 컴포넌트가 부모 컴포넌의 함수를 대신 실행하게 함

  let childValue1 = 1000;


  const sendData = () => {
    props.setData(2000);
  };

  return (
    <div>
      <h3>Child2</h3>
      <h4>부모 컴포넌트가 전달한 데이터1 : {props.data1}</h4>
      <h4>자식 컴포넌트가 가지고 있는 데이터 : {childValue1}</h4>
      <button type={'button'} className={'btn btn-primary'} onClick={sendData}>부모 컴포넌트로 데이터 전달</button>
    </div>
  );
}

export default Child2;