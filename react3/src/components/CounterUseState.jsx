import React, {useState} from "react";

const CounterUseState = props => {
    // useState() hook 을 사용하기 위해서 설정
    // 변수는 const 키워드를 사용하 직접 수정하지 못하게 막음 (State 로 관리되는 애들은 const 써라)
    // 변수값을 변경하는 setCount() 함수를 선언
    // useState() 함수에 매개변수로 0을 초기값으로 지정
    const [count, setCount] = useState(0);

    return (
        <div className={'mt-3'}>
            <p>총 <span className={'fs-3'}>{count}</span>번 클릭했습니다.</p>
            <button type={'button'} className={'btn btn-primary'} onClick={() => {
                // setCount()를 호출하여 useState 로 관리되고 있는 변수 count 의 값을 변경 요청
                // useState 는 비동기 방식으로 동작하기 때문에 화면에 표시되는 값과 console 에 출력되는 값이 다르게 출력될 수 있음
                setCount(count + 1);
                console.log(`useState() count : ${count + 1}`);
            }}>클릭</button>
        </div>
    );
}

export default CounterUseState;