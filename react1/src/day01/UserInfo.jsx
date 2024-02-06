import Avatar from './Avatar';

function UserInfo(props) {
  return (
    <div className={'user-info'}>
      {/* 컴포넌트 추출을 통해서 재사용이 가능하도록 컴포넌트로 생성 */}
      {/*<img className={'avatar'} src={props.author.avatarUrl} alt={props.author.name} />*/}

      <Avatar user={props.userData} />
      <div className={'user-info-name'}>{props.userData.name}</div>
    </div>
  );
}

export default UserInfo;