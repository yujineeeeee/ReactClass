import Book from "./Book";

// props : 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 매개변수
// props의 속성은 부모 컴포넌트에서 자식 컴포넌트를 사용 시 속성명을 통해서 지정함
// 데이터는 지정한속성={데이터}
// 데이터 타입은 숫자(숫자 그대로 입력), 문자('', ""로 감싸서 입력), object, 논리형
// 문자열은 {"문자열"} 또는 "문자열" 사용해도 상관 없음
function Library(props) {
    return (
        <div>
            <Book name="풀스택 자바" numOfPage={500} />
            <Book name={"풀스택 스프링"} numOfPage={300} />
            <Book name={"한입 크기로 잘라먹는 리액트"} numOfPage={600} />
        </div>
    );
}

export default Library;