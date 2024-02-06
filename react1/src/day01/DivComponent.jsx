import UserInfo from './UserInfo';

function formatDate(date){
  return date.toLocaleString();
}

function OriComponent(props) {
  return (
    <div className={'comment'}>
      {/* 컴포넌트 추출 */}
      {/* UI 구성이 복잡한 컴포넌트를 컴포넌트 추출을 통해서 간소화된 형태의 컴포넌트로 UI를 구성할 수 있음 */}
      {/* 기능 단위, 재사용이 가능한 형태로 추출하는 것이 좋음 */}

      {/* 원래 컴포넌트 내용 */}
      {/*<div className={'user-info'}>*/}
      {/*  <img className={'avatar'} src={props.author.avatarUrl} alt={props.author.name} />*/}
      {/*  <div className={'user-info-name'}>{props.author.name}</div>*/}
      {/*</div>*/}

      {/* 컴포넌트 추출을 통해서 자식 컴포넌트로 만듬 */}
      <UserInfo userData={props.author}/>

      <div className={'comment-text'}>{props.text}</div>
      <div className={'comment-date'}>{formatDate(props.date)}</div>
    </div>
  );
}

export default OriComponent;