// 함수 컴포넌트는 자바스크립트의 함수를 생성하고 return 부분에 JSX로 UI 코드를 입력하여 사용
// export default 로 해당 함수를 export 하면 됨
function FuncComponent(props) {
  return (
    <div>
      <h4>함수 컴포넌트 방식으로 컴포넌트 생성</h4>
      <p>함수 컴포넌트로 생성한 자식 컴포넌트 입니다.</p>
    </div>
  );
}

export default FuncComponent;