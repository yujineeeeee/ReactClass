package com.bitc.fs501.boardapiserver.mapper;

import com.bitc.fs501.boardapiserver.dto.BoardDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BoardMapper {
//    게시물 목록 조회
    List<BoardDto> selectBoardList() throws Exception;

//    게시물 상세 조회
    BoardDto selectBoardDetail(@Param("boardIdx") int boardIdx) throws Exception;

//    게시물 등록
    void insertBoard(BoardDto board) throws Exception;

//    게시물 수정
    void updateBoard(@Param("boardIdx") int boardIdx, BoardDto board) throws Exception;

//    게시물 삭제
    void deleteBoard(@Param("boardIdx") int boardIdx) throws Exception;

//    게시글 조회수 올리기
    void updateHitCnt(@Param("boardIdx") int boardIdx) throws Exception;
}
