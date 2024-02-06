import React from 'react';

// 렌더링 막기 : 조건에 따라 컴포넌트의 렌더링을 하지 않고싶을 경우 null 을 반환하면 됨
function WarningBanner(props) {
  // 부모에게서 전달받은 데이터에 따라 null을 반환, null 반환 시 화면 렌더링이 발생하지 않음
  if(!props.warning){
    return null;
  }

  return (
    <div>
      <h2 className={'text-danger'}>경고!!</h2>
    </div>
  );
}

export default WarningBanner;