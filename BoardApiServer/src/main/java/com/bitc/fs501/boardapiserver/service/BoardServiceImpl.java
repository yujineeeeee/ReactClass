package com.bitc.fs501.boardapiserver.service;

import com.bitc.fs501.boardapiserver.dto.BoardDto;
import com.bitc.fs501.boardapiserver.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService {

    private final BoardMapper boardMapper;

    @Override
    public List<BoardDto> selectBoardList() throws Exception {
        return boardMapper.selectBoardList();
    }

    @Override
    public BoardDto selectBoardDetail(int boardIdx) throws Exception {
        return null;
    }

    @Override
    public void insertBoard(BoardDto board) throws Exception {
        boardMapper.insertBoard(board);
    }

    @Override
    public void updateBoard(int boardIdx, BoardDto board) throws Exception {

    }

    @Override
    public void deleteBoard(int boardIdx) throws Exception {

    }

    @Override
    public void updateHitCnt(int boardIdx) throws Exception {

    }
}
