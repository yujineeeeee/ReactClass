
const Profile = props => {
  // JSX 문법이 적용되지 않는 부분에서는 if문 사용할 수 있음
  let item = props.ele;

  if(item == true){
    console.log(`ele 값이 true 입니다.`);
  }
  else {
    console.log(`ele 값이 false 입니다.`);
  }

  return (
    <div>
      <p>이름 : {props.name}</p>
      <p>차종 : {props.type}</p>
      <p>가격 : {props.price}</p>
      {/* 삼항연산자로 조건에 따라 출력되는 형태를 변경 */}
      {/* JSX 문법에서는 자바스크립트의 if문을 사용할 수 없음 */}
      <p>전기차 : {props.ele ? '전기차' : '전기차 아님'}</p>
      <br />
    </div>
  );
}

export default Profile;