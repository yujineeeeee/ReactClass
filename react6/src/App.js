import logo from './logo.svg';
import './App.css';
import AxiosDailyBoxOffice from "./component/AxiosDailyBoxOffice";
import AxiosRestApiServer from './component/AxiosRestApiServer';

function App() {
  return (
    <div className="App">
      <h3>Axios로 비동기 통신하기</h3>
      <AxiosDailyBoxOffice />

      <br /><br />

      <AxiosRestApiServer />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
