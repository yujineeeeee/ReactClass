import React, {useEffect, useState} from "react";
import axios from "axios";

function SelectBoardList(props) {
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/board/')
            .then(res => {
                const dataList = res.data.data;
                setBoardList(dataList);

            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className={'container my-4 p-3'}>
            <table className={'table table-hover table-striped'}>
                <thead>
                <tr>
                    <th>글번호</th>
                    <th>글제목</th>
                    <th>글쓴이</th>
                    <th>등록일</th>
                    <th>조회수</th>
                </tr>
                </thead>
                <tbody>
                {
                    boardList.map(item => {
                        return (
                            <tr key={item.boardIdx}>
                                <td>{item.boardIdx}</td>
                                <td>{item.title}</td>
                                <td>{item.createId}</td>
                                <td>{item.createDate}</td>
                                <td>{item.hitCnt}</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
            <div className={'my-3 d-flex justify-content-end'}>
                <a href={'#'} className={'btn btn-primary'}>글쓰기</a>
            </div>
        </div>
    );
}

export default SelectBoardList;