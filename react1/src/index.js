// 리액트를 사용하기 위해서 리액트 라이브러리 가져옴
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 디폴트 export 로 지정된 요소를 App.js에서 가져옴
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './day01/Clock';

// return : 리액트의 컴포턴트에서 return 에 적용되는 부분은 JSX 문법을 통해서 화면을 생성함
// return 되는 내용이 1라인일 경우 () 생략 가능
// 2 라인 이상 나올 경우는 반드시 () 필수
// return 되는 내용의 부모가 되는 태그는 반드시 1개여야 함
function TestPage(){
    return <div style={{background: "skyblue"}}>리액트로 만든 화면</div>
}

function TestPage2() {
    return (
        <div>
            <h3>리액트로 만든 컴포넌트</h3>
            <p>한번 만들어 봤어요</p>
            <p>수정하면 바로 적용</p>
        </div>
        // <div>
        //     이건 안됨~
        // </div>
    )
}

// index.html 에서 id 값이 root 인 태그를 검색하여 가져옴
// 리액트의 Virtual DOM 생성
const root = ReactDOM.createRoot(document.getElementById('root'));
// render() : 리액트에서 실제로 화면을 그려주는 함수, 아래는 JSX 문법으로 동작함
root.render(
  //   기존 자바스크립트는 호환성을 위해서 자바스크립트 문법을 유연하게 적용함
  //   StrictMode 사용 시 자바스크립트 문법을 강력하게 적용함
  <React.StrictMode>
    {/*  미리 생성된 컴포넌트를 호출하여 화면에 그려줌*/}
    <App />

    {/*  자바스크립트 함수를 html 태그 사용하는 것처럼 입력 */}
    {/*  <TestPage />*/}
    {/*  <TestPage2></TestPage2>*/}
  </React.StrictMode>
);

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   )
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
