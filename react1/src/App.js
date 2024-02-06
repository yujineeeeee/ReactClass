import './App.css';
import Library from './day01/Library';
import Car from './day01/Car';
import Compo from './day01/Compo';
import { Button } from 'react-bootstrap';
import CommentList from './day01/CommentList';

// index.js 가 리액트가 사용하는 기본 파일이지만 개발 시에는 App.js를 기본 파일로 사용함
// App.js 가 사용자가 생성한 다른 컴포넌트들을 호출해서 출력한다고 생각하면 됨
// 컴포넌트는 주로 파일로 따로 분리해서 사용함
// 컴포넌트의 이름의 첫글자는 대문자로 사용하는 것이 관례임
// 화면을 그리기 위한 컴포넌트는 export default 로 지정함

// 클래스 컴포넌트 : UI 구성하는 방식을 자바스크립트의 클래스로 이루어진 컴포넌트, 예전에는 클래스 컴포넌트를 주로 사용했음, 컴포넌트의 생명주기 함수를 사용하기 위해스 클래스 컴포넌트를 사용했음
// 함수 컴포넌트 : UI를 구성하는 방식을 자바스크립트 함수로 이루어진 컴포넌트, 예전에 함수 컴포넌트는기능에 제약이 있었음, Hooks 라는 기능이 추가되면서 함수 컴포넌트로 컴포넌트의 생명주기 함수를 사용할 수 있게 됨
function App() {
  return (
    <div>
        <Library />
        <hr />
        <Car />
        <hr />

        <Compo />

        <br />
        <hr />
        <br />

        <button>기본 버튼</button>
        <button className={'btn btn-primary'}>부트스트랩 적용 버튼</button>
        <Button variant={'primary'}>리액트 부트스트랩 버튼</Button>

        <br />
        <hr />

        <CommentList />


        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </div>
  );
}

export default App;
