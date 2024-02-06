import React, {useEffect, useState} from "react";

function CounterUseEffect(props) {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // useEffect : 리액트에서 제공하는 hook 중 하나로 클래스 컴포넌트만 사용 할 수 있었던 리액트 생명주기 함수를 사용할 수 있도록 해줌
    // 하나의 컴포넌트에서 useEffect를 여러개 사용할 수 있음
    // 사용법 :
    // useEffect(effect콜백함수, 의존성 배열);
    // effect 콜백함수 : useEffect 사용 시 동작할 소스 코드
    // 의존성 배열 : 의존성 배열로 지정한 배열의 내용이 변경 시 useEffect 가 동작 (생략 가능)

    // componentDidMount() 함수의 역할
    // useEffect 사용 시 의존성 배열을 빈 배열로 지정
    useEffect(() => {
        setCount2(100);
        console.log('컴포넌트 mount 시 동작');
    }, []);

    // componentDidUpdate() 함수의 역할
    // useEffect 사용 시 의존성 배열에 변수를 지정함
    // 해당 변수의 값이 변경되었을 경우 useEffect가 동작함
    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`;
        console.log('컴포넌트 update 시 동작');
    }, [count]);

    // componentWillUnmount() 함수의 역할
    // useEffect 사용 시 effect콜백 함수의 return 부분에 콜백함수를 입력하면 콜백함수를 컴포넌트가 삭제될 때 useEffect 가 동작함
    useEffect(() => {
        return () => {
            console.log('컴포넌트 unmount 시 동작함');
        }
    }, []);

    return (
        <div>
            <p>총 <span className={'fs-3'}>{count}</span>번 클릭했습니다.</p>
            <button type={'button'} className={'btn btn-primary'} onClick={() => {
                setCount(count + 1);
            }}>클릭</button>
            <div className={'mt-3'}>
                <p>두번째 count의 값 : <span className={'fs-3'}>{count2}</span></p>
                <button type={'button'} className={'btn btn-primary'} onClick={() => {
                    setCount2(count2 + 10);
                }}>+10 클릭</button>
            </div>
        </div>
    );
}

export default CounterUseEffect;