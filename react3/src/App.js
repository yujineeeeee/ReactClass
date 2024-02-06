import React from 'react';
import CounterClass from './components/CounterClass';
import CounterFunc from './components/CounterFunc';
import CounterUseState from './components/CounterUseState';
import CounterUseEffect from './components/CounterUseEffect';
import LifecycleClass from './components/LifecycleClass';
import LifecycleFunc from './components/LifecycleFunc';
import VolumeControl from './components/VolumeControl';
import HookUseMemo from './components/HookUseMemo';
import HookUseRef from './components/HookUseRef';
import HookUseMemo2 from './components/HookUseMemo2';
import Accommodate from './components/Accommodate';

function App() {
  return (
    <div className="container mt-4">
      <h2>React Hook 사용하기</h2>
      <br />
      <h3>함수 컴포넌트에서 Hook 없이 그냥 사용했을 경우</h3>
      <CounterFunc />
      <hr />

      <h3>클래스 컴포넌트에서 Hook 없이 그냥 사용했을 경우</h3>
      <CounterClass />
      <hr />

      <h3>useState 사용</h3>
      <CounterUseState />
      <hr />

      <h3>userEffect 사용</h3>
      <CounterUseEffect />
      <hr />

      <br />
      <LifecycleClass />
      <hr />

      <LifecycleFunc />
      <hr />

      <VolumeControl />
      <hr />

      <h3>useMemo 사용</h3>
      <HookUseMemo />
        <hr/>

        <h3>useRef 사용</h3>
        <HookUseRef/>
        <hr/>

      <h3>커스텀 훅 사용하기</h3>
        <Accommodate/>



      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
