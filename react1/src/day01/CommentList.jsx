import Comment from './Comment';

// 댓글 목록 데이터 (배열)
const comments = [
  {name: '아이유', comment: '안녕하세용..'},
  {name: '유재석', comment: '집에 보내주세용..'},
  {name: '철수', comment: '집에 보내주세용..'},
  {name: '짱구', comment: '집에 보내주세용..'},
  {name: '유리', comment: '집에 보내주세용..'},
  {name: '맹구', comment: '집에 보내주세용..'},
];

function CommentList(props) {
  return (
    <div>
      {
        comments.map(item => {
          return (
            <Comment name={item.name} comment={item.comment}/>
          )
        })
      }
    </div>
  );
}

export default CommentList;