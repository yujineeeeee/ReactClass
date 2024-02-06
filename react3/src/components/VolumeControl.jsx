import React, { useEffect, useState } from 'react';

function VolumeControl(props) {
  // state로 관리할 변수 volume 지정, 변수값 변경하는 함수 setVolume로 설정, 초기값은 0으로 설정
  const [volume, setVolume] = useState(0);

  // useEffect 를 사용하여 volume 의 기본값 설정
  // useEffect 의 의존성 배열을 빈배열로 사용하여 componentDidMount() 로 사용
  useEffect(() => {
   setVolume(5);
  }, []);

  // useEffect 의 의존성 배열에 state 로 관리하는 volume 변수를 등록하여 componentDidUpdate() 로 사용
  useEffect(() => {
    console.log(`volume : ${volume}`)
  }, [volume]);

  return (
    <div>
      볼륨값 : <span className={'fs-4'}>{volume}</span>
      <div>
        <button type={'button'} className={'btn btn-primary me-2'} onClick={() => {
          if(volume > 0){
            setVolume(volume - 1)
          }

          // (volume + 1) < 0 ? setVolume(0) : setVolume(volume - 1); // 선생님 코드

          // volume > 0 && setVolume(volume - 1); // 윤쌤 코드
        }}> - </button>
        <button type={'button'} className={'btn btn-primary'} onClick={() => {
          if(volume < 10){
            setVolume(volume + 1)
          }

          // 삼항연산자를 사용하여 변경된 volume 의 값이 0 미만이거나 10 초과하지 못하게 막음
          // (volume + 1) > 10 ? setVolume(10) : setVolume(volume + 1);

          // volume < 10 && setVolume(volume + 1);
        }}> + </button>
      </div>

    </div>
  );
}

export default VolumeControl;