import React, { useState } from 'react';

// 컴포넌트는 해당 컴포넌트 자체적으로 state를 관리
// 해당 컴포넌트를 벗어나면 데이터가 삭제됨
// 부모 컴포넌트에 포함된 자식 컴포넌트는 부모 컴포넌트가 메모리에 있을 경우 함께 존재함

// 부모 컴포넌트로 데이터 전달하는 방법
// 부모 컴포넌트에 자식 컴포넌트의 데이터를 전달하려면 부모 컴포넌트의 함수를 대신 실행해야 함
// 부모 컴포넌트에서 state로 관리하는 변수를 생성하고 해당 변수의 값을 수정하는 함수를 자식 컴포넌트에 전달
// 전달받은 함수를 자식 컴포넌트에서 대신 실행

function JoinForm(props) {
  //  자식 컴포넌트인 JoinForm은 부모 컴포넌트인 Join에서 변수 값을 수정하는 함수를 전달받음
  //  props = {setId: setId(), setPw: setPw(), setEmail: setEmail(), setName: setName()}
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  const changeUserId = e => setUserId(e.target.value);
  const changeUserPw = e => setUserPw(e.target.value);
  const changeUserEmail = e => setUserEmail(e.target.value);
  const changeUserName = e => setUserName(e.target.value);

  // submit 버튼 클릭 시 데이터 전달
  const submitClick = e => {
//     let msg = `User Id : ${userId}
// User Pw : ${userPw}
// User Email : ${userEmail}
// User Name : ${userName}`;
//     alert(msg);

    // 부모에게서 전달받은 함수를 자식 컴포넌트가 대신 실행하여 부모 컴포넌트의 state로 관리되고 있는 변수의 값을 변경
    props.setId(userId);
    props.setPw(userPw);
    props.setEmail(userEmail);
    props.setName(userName);

    e.preventDefault();
  }


  return (
      <form onSubmit={submitClick}>
        <div className={'mt-3'}>
          <label htmlFor={'user-id'} className={'form-label'}>User ID :</label>
          <input type={'text'} className={'form-control'} id={'user-id'} value={userId} onChange={changeUserId} />
        </div>
        <div className={'mt-3'}>
          <label htmlFor={'user-id'} className={'form-label'}>User Password :</label>
          <input type={'password'} className={'form-control'} id={'user-pw'} value={userPw} onChange={changeUserPw} />
        </div>
        <div className={'mt-3'}>
          <label htmlFor={'user-email'} className={'form-label'}>User Email :</label>
          <input type={'email'} className={'form-control'} id={'user-email'} value={userEmail}
                 onChange={changeUserEmail} />
        </div>
        <div className={'mt-3'}>
          <label htmlFor={'user-name'} className={'form-label'}>User Name :</label>
          <input type={'text'} className={'form-control'} id={'user-name'} value={userName} onChange={changeUserName} />
        </div>
        <div className={'mt-3 d-grid gap-2'}>
          <button type={'submit'} className={'btn btn-primary'}>확인</button>
          <button type={'reset'} className={'btn btn-secondary'}>취소</button>
        </div>
        <br />
      </form>
  );
}

export default JoinForm;