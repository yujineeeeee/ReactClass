import React from "react";

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('constructor() 호출됨');
    }

    componentDidMount() {
        console.log('componentDidMount() 호출됨');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate() 호출됨');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount() 호출됨');
    }

    // 생성자 실행 후 render() 실행
    render() {
        return (
            // 부모로부터 전달된 데이터를 가지고 UI를 첫 구성함
            <div className={'m-2 p-2 d-flex border rounded-3'}>
                <span className={'text-black fs-4'}>{this.props.message}</span>
                {console.log('render() 호출됨')}
            </div>
        );
    }
}

export default Notification;