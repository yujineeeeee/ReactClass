import React, {useState} from "react";
import axios from "axios";

function AxiosDailyBoxOffice(props) {
    const [boxOffice, setBoxOffice] = useState([]);

    const loadDailyBoxOffice = () => {
        // axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240206')
        axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json', {
            params: {
                key: 'f5eef3421c602c6cb7ea224104795888',
                targetDt: '20240206'
            }
        })
          .then(res => {
              // 단계별로 데이터 가져오기
              const {data} = res;
              const {boxOfficeResult} = data;
              const {dailyBoxOfficeList} = boxOfficeResult;

              // 한번에 가져오기
              // const boxOfficeList = res.data.boxOfficeResult.dailyBoxOfficeList;

              setBoxOffice(dailyBoxOfficeList);
          })
          .catch(err => {
              console.log(err);
              alert('통신 중 오류 발생');
          });
    };

    return (
      <div className={'container-sm mt-3'}>
          <div className={'row'}>
              <div className={'col-sm mx-auto'}>
                  <table className={'table table-hover table-striped'}>
                      <colgroup>
                          <col width={'10%'}/>
                          <col width={'10%'}/>
                          <col width={'10%'}/>
                          <col width={'10%'}/>
                          <col width={'10%'}/>
                      </colgroup>
                      <thead>
                      <tr>
                          <th>순위</th>
                          <th>제목</th>
                          <th>개봉일</th>
                          <th>당일 관람객</th>
                          <th>누적 관람객</th>
                      </tr>
                      </thead>
                      <tbody>
                      {
                          boxOffice.map(item => {
                              return (
                                <tr key={item.rnum}>
                                    <td>{item.rank}</td>
                                    <td>{item.movieNm}</td>
                                    <td>{item.openDt}</td>
                                    <td>{item.audiCnt}</td>
                                    <td>{item.audiAcc}</td>
                                </tr>
                              )
                          })
                      }
                      </tbody>
                  </table>
                  <div className={'my-3 d-flex justify-content-end'}>
                      <button type={'button'} className={'btn btn-primary'} onClick={loadDailyBoxOffice}>일일 영화 순위 조회</button>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default AxiosDailyBoxOffice;