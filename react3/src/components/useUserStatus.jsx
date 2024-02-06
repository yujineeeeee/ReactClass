import React, { useEffect, useState } from 'react';

// 커스텀 훅 사용하기
// 리액트에서 제공하는 훅 중에서 사용자가 원하는 기능이 없을 경우 사용자가 직접 훅을 생성하여 사용할 수 있음
// 커스텀 훅은 이름이 'use'로 시작하고 컴포넌트 내부에서 다른 리액트 훅을 호출하는 자바스크립트 함수를 커스텀 훅이라고 함
// 커스텀 훅의 이름을 use로 시작하지 않으면 리액트 내부적으로 해당 함수가 훅을 실행하는지 일반 함수를 실행하는지 판단할 수 없기 때문에 커스텀 훅의 이름을 반드시 'use'로 시작해야 함
// 여러가지 컴포넌트에서 반복적으로 사용되는 훅을 자바스크립트 함수로 묶어 놓은 것

function useUserStatus(userId) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status){
      setIsOnline(status.isOnline);
    }

    ServerAPI.subscribUserStatus(userId, handleStatusChange);
  }, []);

  return isOnline;
}

export default useUserStatus;