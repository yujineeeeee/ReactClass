import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';
import Welcome from './Welcome';
import OriComponent from './OriComponent';
import DivComponent from './DivComponent';

// 현재는 주로 함수 컴포넌트로 리액트 사이트를 개발함

// 컴포넌트 합성 : 여러개의 컴포넌트를 합하여 하나의 컴포넌트를 만드는 것, 리액트는 컴포넌트 안에 다른 컴포넌트를 사용할 수 있기 때문에 복잡한 화면을 여러개의 커포넌트로 나누어서 구현할 수 있음

// 컴포넌트 추출 : 하나의 컴포넌트에서 작은 크기의 컴포넌트를 새로 여러개 만들어 내는 것,

const data = {
  name: '아이유',
  avatarUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg'
}

function Compo(props) {
  return (
    <div>
      <h3>함수 컴포넌트 사용하기</h3>
      <FuncComponent />
      <hr />

      <h3>클래스 컴포넌트 사용하기</h3>
      <ClassComponent />
      <br />
      <hr />
      <br />

      <div>
        <Welcome name={'아이유'} />
        <Welcome name={'유인나'} />
        <Welcome name={'유재석'} />
      </div>

      <br/>
      <hr/>
      <br/>

      <div>
        <h2>컴포넌트 추출</h2>
        <p>원본 컴포넌트</p>

        <OriComponent text={'외부이미지 사용'} date={new Date()} author={data} />

        <hr />

        <p>추출된 컴포넌트</p>

        <DivComponent text={'컴포넌트 추출'} date={new Date()} author={data} />
      </div>

    </div>
  );
}

export default Compo;