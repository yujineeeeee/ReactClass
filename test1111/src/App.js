import './App.css';
import NotificationList from "./components/NotificationList";
import Events from "./components/Events";

function App() {
    return (
        <div className={'container'}>

            <h3>컴포넌트 생명주기</h3>
            <NotificationList/>

            <br/><hr/><br/>

            <h3>이벤트 사용하기</h3>
            <Events/>

        </div>
    );
}

export default App;
