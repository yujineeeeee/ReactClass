import React from "react";

class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.count = 0;
    }

    render() {
        return (
            <div className={'m-3'}>
                <p>총 {this.count}번 클릭했습니다.</p>
                <button type={'button'} className={'btn btn-primary'} onClick={() => {
                    this.count++;
                    console.log(`class count : ${this.count}`);
                    // forceUpdate()를 사용하여 강제로 화면을 업데이트 시킴
                    // forceUpdate() 리액트에서 사용을 권장하지 않음
                    // this.forceUpdate();
                }}>클릭
                </button>
            </div>
        );
    }
}

export default CounterClass;