package com.bitc.fs501.boardapiserver.dto;

import lombok.Data;

@Data
public class BoardDto {
    private int boardIdx;
    private String title;
    private String contents;
    private String createId;
    private String updateId;
    private String createDate;
    private String updateDate;
    private int hitCnt;
}
