import React, { useState } from 'react';

// 문제 1) 회원 가입 페이지를 작성하세요
// id, 비밀번호, 이름, email, 휴대전화, 성별 정보를 입력 받고 확인 버튼 클릭 시 console.log 나 alert 로 결과를 출력하는 리액트 컴포넌트를 작성하세요
// id : userId, 비밀번호 : userPw, 이름 : userName, 이메일 : userEmail, 휴대전화: userPhone, 성별 : userGender
// 컴포넌트명 : Join

function Join(props) {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userGender, setUserGender] = useState('남자');

  const handleSubmit = (e) => {
    const message = `아이디 : ${userId}
비밀번호 : ${userPw}
이름 : ${userName}
이메일 : ${userEmail}
휴대폰 : ${userPhone}
성별 : ${userGender}`;

    alert(message);
    e.preventDefault();
  };

  const handleClickRadioButton = (e) => {
    setUserGender(e.target.value);
  };

  return (
    <div className={'mt-4'}>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input type={'text'} className={'form-control'} placeholder={'id'} value={userId} id={'user-id'}
                 onChange={e => setUserId(e.target.value)} />
          {/* JSX 문법 사용 중 label 태그의 for 속성을 htmlFor 속성으로 사용함 */}
          <label htmlFor={'user-id'}>아이디</label>
        </div>

        <div className="form-floating mb-3">
          <input type={'password'} className={'form-control'} placeholder={'pw'} value={userPw}
                 onChange={e => setUserPw(e.target.value)} />
          <label>비밀번호</label>
        </div>

        <div className="form-floating mb-3">
          <input type={'text'} className={'form-control'} placeholder={'name'} value={userName}
                 onChange={e => setUserName(e.target.value)} />
          <label>이름</label>
        </div>

        <div className="form-floating mb-3">
          <input type={'text'} className={'form-control'} placeholder={'email'} value={userEmail}
                 onChange={e => setUserEmail(e.target.value)} />
          <label>이메일</label>
        </div>

        <div className="form-floating mb-3">
          <input type={'text'} className={'form-control'} placeholder={'phone'} value={userPhone}
                 onChange={e => setUserPhone(e.target.value)} />
          <label>휴대폰</label>
        </div>

        <div>
          <div className={'form-check form-check-inline'}>
            <input className={'form-check-input'} type={'radio'} value={'남자'} name={'radioOptions'} checked={userGender === '남자'} onChange={handleClickRadioButton} />
            <label className={'form-check-label'}>남자</label>
          </div>
          <div className={'form-check form-check-inline'}>
            <input className={'form-check-input'} type={'radio'} value={'여자'} name={'radioOptions'} checked={userGender === '여자'} onChange={handleClickRadioButton} />
            <label className={'form-check-label'}>여자</label>
          </div>
        </div>

        <button type={'submit'} className={'btn btn-primary mt-3'}>회원가입</button>
      </form>
    </div>
  );
}

export default Join;