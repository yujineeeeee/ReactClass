import React, {useState} from "react";
import JoinForm from "./JoinForm";

function Join(props) {
  // 부모 컴포넌트에서 state로 설정한 변수
  // 자식 컴포넌트에서 전달한 데이터를 저장할 변수
  const [id, setId] = useState('')
  const [pw, setPw] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  return (
    <div className={'container'}>
      <div className={'row'}>
        <div className={'col-sm-4 mx-auto border border-2 border-info rounded-4'}>
          <h2 className={'text-center mt-3'}>회원 가입</h2>
          {/*state로 설정된 변수를 수정할 수 있는 함수를 자식 컴포넌트에 전달*/}
          <JoinForm setId={setId} setPw={setPw} setEmail={setEmail} setName={setName} />
        </div>
      </div>
      <br/>
      <hr/>
      <br/>
      <div className={'row'}>
        <div className={'col-sm-4 mx-auto border border-2 border-secondary rounded-4 p-3'}>
          <h4>사용자 ID : {id}</h4>
          <h4>사용자 PW : {pw}</h4>
          <h4>사용자 EMAIL : {email}</h4>
          <h4>사용자 NAME : {name}</h4>
        </div>
      </div>
    </div>
  );
}

export default Join;







