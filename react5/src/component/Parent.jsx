import React from 'react';
import Child from './Child';

function Parent(props) {
  return (
    <div>
      {/* 데이터는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 것을 기본으로 함 */}
      {/* props 를 통해서 자식 컴포넌트로 데이터를 전달 */}
      {/* 자식 컴포넌트 호출 시 속성명을 지정하고 데이터를 전달함 */}
      <Child data={'부모가 전달한 데이터'}/>
    </div>
  );
}

export default Parent;