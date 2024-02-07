package com.bitc.fs501.boardapiserver.service;

import com.bitc.fs501.boardapiserver.dto.BoardDto;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BoardService {
    List<BoardDto> selectBoardList() throws Exception;

    //    게시물 상세 조회
    BoardDto selectBoardDetail(int boardIdx) throws Exception;

    //    게시물 등록
    void insertBoard(BoardDto board) throws Exception;

    //    게시물 수정
    void updateBoard(int boardIdx, BoardDto board) throws Exception;

    //    게시물 삭제
    void deleteBoard(int boardIdx) throws Exception;

    //    게시글 조회수 올리기
    void updateHitCnt(int boardIdx) throws Exception;
}
