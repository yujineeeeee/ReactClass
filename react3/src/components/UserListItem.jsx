import React, { useEffect, useState } from 'react';
import useUserStatus from './useUserStatus';

// 사용자 목록에서 온라인 사람은 회원명을 녹색으로 표현, 오프라인이면 검정색으로 표현
function UserListItem(props) {
  // 커스텀 훅 사용
  const isOnline = useUserStatus(props.user.id);


  // 커스텀 훅 미사용
  // const [isOnline, setIsOnline] = useState(null);
  //
  // useEffect(() => {
  //
  //   function handleStatusChange(status){
  //     setIsOnline(status.isOnline);
  //   }
  //   ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
  // }, [])

  return (
    <li style={{color: isOnline ? 'green' : 'black'}}>{props.user.name}</li>
  );
}

export default UserListItem;