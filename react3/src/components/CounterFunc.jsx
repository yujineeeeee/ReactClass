import React from "react";

function CounterFunc(props) {
  // 리액트는 UI 화면을 Virtual DOM 을 사용하여 먼저 UI 화면을 만들고, 실제 사용자가 보고 있는 DOM 화면과 교체함
  // 리액트를 통해서 UI 화면을 그리는 시점은 컴포넌트가 가지고 있는 render() 함수가 실행될 때 그려짐 UI 화면을 그림
  // render() 함수가 동작하는 상황은 부모 컴포넌트가 전달해 준 props의 값이 변경되거나, 현재 컴포넌트의 state에서 관리하는 데이터가 변경되거나 forceUpdate() 함수가 실행되었을 경우 render() 함수가 실행됨
  let count = 0;

  // react Hook : 리액트의 state와 생명주기 기능에 갈고리를 걸어서 원하는 시점에 정해진 함수를 실행되도록 만든 것
  // useState : state 상태 관리를 쉽게하기 위해서 사용
  // useEffect : 생명주기 함수를 쉽게 사용하기 위해서 사용
  // useNavigate : React Router 를 사용하여 MPA 방식 웹을 만든 것 처럼 하기 위해서 사용
  // useMemo : 기존에 수행한결과값을 저장해두고 동일한 입력이 들어왔을 경우 해당 데이터를 재할용하여 로딩 속도를 높임
  // useCallback : useMemo 동일한 기능이지만 userMemo는 결과값을 재활용하지만 useCallback은 함수를 재활용함
  // useRef : 특정 컴포넌트에 접근할 수 있도록 해줌

  return (
      <div className={'m-3'}>
        <p>총 {count}번 클릭했습니다.</p>
        <button type={'button'} className={'btn btn-primary'} onClick={() => {
          count++;
          console.log(`function count : ${count}`);

        }}>클릭</button>
      </div>
  );
}

export default CounterFunc;