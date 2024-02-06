import './App.css';
import Event1 from './components/Event1';
import Greeting from './components/Greeting';
import LoginControl from './components/LoginControl';
import Mailbox from './components/Mailbox';
import Counter from './components/Counter';
import LoginControl2 from './components/LoginControl2';
import MainPage from './components/MainPage';
import LandingPage from './components/LandingPage';
import NameForm from './components/NameForm';
import RequestForm from './components/RequestForm';
import FruitSelect from './components/FruitSelect';
import Reservation from './components/Reservation';
import Join from './components/Join';

function App() {
  return (
    <div className={'container mt-4'}>

      <h3>이벤트 사용하기</h3>
      <Event1 />
      <br />
      <hr />
      <br />

      <h3>조건부 렌더링</h3>
      <Greeting isLoggedIn={true} />
      <br />
      <hr />
      <br />

      <h3>엘리먼트 변수 사용하기</h3>
      <LoginControl />
      <br />
      <hr />
      <br />

      <h3>인라인 if else 사용하기</h3>
      <Mailbox unreadMessages={0} />
      <br /><br />

      <Mailbox unreadMessages={10} />
      <br /><br />

      <Counter />
      <br /><br />

      <LoginControl2 />
      <br />
      <hr />
      <br />

      <h3>렌더링 막기</h3>
      <MainPage />
      <br />
      <hr />
      <br />

      <LandingPage />
      <br />
      <hr />
      <br />

      <h3>리액트에서 form 사용하기</h3>
      <NameForm />
      <br />

      <RequestForm />
      <br />

      <FruitSelect />
      <br />

      <Reservation />
      <br />
      <hr />
      <br />
        <h3>문제1. 회원가입 페이지</h3>
        <Join/>


      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
