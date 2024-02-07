import React from 'react';
import axios from 'axios';

function AxiosRestApiServer(props) {

  const errorMessage = (param, err) => {
    console.log(`${param} 방식 통신 중 오류가 발생했습니다.`);
    console.log(err);
  }

  const clickSendDataGet = () => {
    axios.get('http://localhost:8080/async/sendDataGet')
      .then(res => {
        const {result, data} = res.data;

        if(result === "success"){
          console.log(`수신된 데이터 : ${data}`);
        }
        else{
          console.log('오류가 발생했습니다.');
        }
      })
      .catch(err => {
        errorMessage("get", err);
      });
  };

  const clickSendDataGetParam = () => {
    // axios.get('http://localhost:8080/async/sendDataGetParam?idx=100')
    // axios.get(`http://localhost:8080/async/sendDataGetParam?idx=${변수명}`)
    axios.get('http://localhost:8080/async/sendDataGetParam', {
      params: { idx: 600 }
    })
      .then(res => {
        const {result, data} = res.data;

        if(result === "success"){
          console.log(`수신된 데이터 ${data}`);
        }
        else {
          console.log('통신 중 오류가 발생했습니다.');
        }
      })
      .catch(err => {
        errorMessage('get', err);
      })
  };

  const clickSendDataPost = () => {
    axios.post('http://localhost:8080/async/sendDataPost', null, {
      params: {
        userId: 'test1',
        userPw: "1234"
      }
    })
      .then(res => {
        console.log('POST 방식 비동기 통신 성공');

        const {result, data} = res.data;

        if(result === "success"){
          console.log(`수신된 데이터 userId : ${data.userId}, userPW : ${data.userPw}`);
        }
        else {
          console.log('통신 중 오류가 발생했습니다.');
        }

      })
      .catch(err => {
        errorMessage('post', err);
      });
  };

  const clickSendDataPut = () => {
    axios.put('http://localhost:8080/async/sendDataPut', null, {
      params: {
        idx: 100
      }
    })
      .then(res => {
        console.log('PUT 방식 비동기 통신 성공');

        const {result, data} = res.data;

        console.log(result)

        if(result === "success"){
          console.log(`수신된 데이터 : ${data}`);
        }
        else {
          console.log('통신 중 오류가 발생했습니다.');
        }

      })
      .catch(err => {
        errorMessage('post', err);
      });
  };

  const clickSendDataDelete = () => {
    axios.delete('http://localhost:8080/async/sendDataDelete', {
      params: { idx: 200 }
    })
      .then(res => {
        console.log('DELETE 방식 비동기 통신 성공')

        const {result, data} = res.data;

        if(result === "success"){
          console.log(`수신된 데이터 idx : ${data}`);
        }
        else {
          console.log('통신 중 오류가 발생했습니다.');
        }

      })
      .catch(err => {
        errorMessage('put', err);
      });
  };

  return (
    <div className={'container-sm'}>
      <h2 className={'text-center'}>Axios를 이용한 비동기 통신</h2>
      <div className={'row'}>
        <div className={'col-sm-8 mx-auto'}>
          <div className={'my-3 d-flex justify-content-center'}>
            <button type={'button'} className={'btn btn-primary me-2'} onClick={clickSendDataGet}>GET 방식 사용</button>
            <button type={'button'} className={'btn btn-success me-2'} onClick={clickSendDataGetParam}>GET 방식에 파라미터 추가</button>
            <button type={'button'} className={'btn btn-info me-2'} onClick={clickSendDataPost}>POST 방식 사용</button>
            <button type={'button'} className={'btn btn-warning me-2'} onClick={clickSendDataPut}>PUT 방식 사용</button>
            <button type={'button'} className={'btn btn-secondary me-2'} onClick={clickSendDataDelete}>DELETE 방식 사용</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AxiosRestApiServer;