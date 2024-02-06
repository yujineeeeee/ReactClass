import React, { useEffect, useState } from 'react';
import useUserStatus from './useUserStatus';

// 훅의 규칙
// 1. 훅은 함수 컴포넌트에서만 사용 가능
//  - 일반 자바스크립트 함수에서 훅을 호출하면 안됨
// 2. 훅은 무조건 최상위 레벨에서 호출해야 함 (해당 컴포넌트의 최상위 레벨)
//  - if 문 및 for 문과 같으 다른 명령어 혹은 함수 안에서 사용하는 것은 불가능
// 3. 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되야 함

// 현재 사용자 상태가 온라인인지 오프라인인지 표시하는 컴포넌트
function UserStatus(props){

  // 커스텀 훅 사용하기
  // 리액트에서 제공하는 훅 중에서 사용자가 원하는 기능이 없을 경우 사용자가 직접 훅을 생성하여 사용할 수 있음
  const isOnline = useUserStatus(props.user.id);


  // 커스텀 훅 미사용
  // const [isOnline, setIsOnline] = useState(null);
  //
  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }
  //
  //   // 서버에 접속 중인지 확인하는 명령어
  //   ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
  // }, [])

  if(isOnline == null){
    return '대기중...';
  }

  return isOnline ? '온라인' : '오프라인';
}

export default UserStatus;