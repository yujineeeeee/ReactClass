import './App.css';
import Exercise from './component/Exercise';
import Parent from './component/Parent';
import Parent2 from './component/Parent2';
import Join from './component/Join';

function App() {
  return (
    <div className={'mt-5'}>
      <h2 className={'mb-5'}>클론 코딩으로 UI 만들기</h2>
      <Exercise />
      <br />
      <hr />
      <br />

      <h3>상태 공유하기</h3>
      <Parent />
      <br /><br />

      <Parent2 />
      <br/> <br/>

      <Join/>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </div>
  );
}

export default App;
