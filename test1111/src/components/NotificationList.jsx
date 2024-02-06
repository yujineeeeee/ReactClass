import React from "react";
import Notification from "./Notification";

// 화면에 출력할 데이터
const reservedNotifications = [
    {message: '안녕하세요. 메시지 테스트입니다.', key: 1},
    {message: '두번째 메시지 입니다.', key: 2},
    {message: '세번째 메시지 입니다.', key: 3},
    {message: '네번째 메시지 입니다.', key: 4},
];

// 자바스크립트 타이머 객체 값을 저장하기 위한 변수
let timer;

// 클래스 컴포넌트로 컴포넌트 생성
class NotificationList extends React.Component{
    // 클래스 컴포넌트의 생성자
    constructor(props) {
        super(props);

        // state 객체 선언
        this.state = {
            // notifications라는 이름의 배열을 상태 관리한다고 등록
            notifications: [],
        }
    }

    // 현재 컴포넌트의 UI 화면을 구성하고 부모 컴포넌트에 붙이고 난 후 동작하는 메소드
    componentDidMount() {
        // state로 관리되고 있는 객체를 componentDidMount() 메소드의 지역 변수로 선언
        const {notifications} = this.state;

        // 타이머 생성, 2초에 한번씩 자동 실행
        timer = setInterval(() => {
            // 지역변수 notifications의 크기와 전역변수 reservedNotifications의 크기 비교
            if (notifications.length < reservedNotifications.length){
                const index = notifications.length;
                // 지역변수 notifications에 전역 변수 reservedNotifications의 값을 1개 저장
                notifications.push(reservedNotifications[index]);
                // setState() 함수를 사용하여 state에서 관리하는 데이터 수정
                // setState() 함수의 매개변수로 object 타입 사용
                // object 타입의 key 이름을 notifications로 지정, 저장될 값은 지역변수인 notifications 를 사용
                this.setState({notifications: notifications});
            }
            else {
                // 타이머 삭제
                clearInterval(timer);
            }
        }, 2000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {
    }

    // 생성자 실행 후 UI를 그리는 render() 함수가 실행
    // render() 이후에 componentDidMount()가 실행
    render() {
        return (
            <div>
                {/* 첫 render() 호출 시 state에서 관리되고 있는 배열인 notifications이 빈 배열이기 때문에 map 함수가 실행되지 않음 */}
                {/* 자식 컴포넌트인 Notification 을 호출할 수 없어서 화면을 그리지 않음 */}
                {/* setState() 가 실행된 후 render() 함수가 다시 호출됨  */}
                {/* state가 관리하고 있는 배열 notification 에 데이터가 있으므로 map 함수가 실행됨 */}
                {this.state.notifications.map((item, index) => {
                    // key : 자식 컴포넌트를 반복(map, forEach) 여 호출할 경우 리액트는 호출한 자식 컴포넌트를 구분하지 못함
                    // 반복 호출한 컴포넌트의 순서를 지정하기 위해서 사용하는 속성이 key 임
                    // key는 중복되지 않는 값을 입력해야 함
                    // 배열의 index 값을 key 값으로 사용할 수 있으나 권장하지 않음
                    return <Notification message={item.message} key={item.key} />
                })}
            </div>
        );
    }
}

export default NotificationList;