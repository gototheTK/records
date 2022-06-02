# Community Board

---

https://github.com/gototheTK/Community

---

---

## Used languages & tools

---

### 1.Front

    - Javascript
    - Javascript_React

### 2.Back

    - Java20.04.2 LTS
    - Java_SpringBoot
    - Mysql 8.0.29-0ubuntu0.20.04.3

### 3.Environment

    - ubuntu 20.04 lts(wsl)
    - vscode

---

---

## ~~1.대댓글 기능 구현~~

    댓글 테이블
    id | boardId | groupId | rankNum(순서) | parent | children | content | createDate

    1.대댓글 내용과 및 대상하는 부모댓글번호를 POST리퀘스트로 보낸다.
    2.우선 대댓글 내용과 시큐리티로 인증된 회원정보로 댓글을 먼저 작성한다.
    3.그룹번호로 묶여진 댓글들을 댓글순서로 정렬하여 가져온다.
    4.부모댓글의 다음순서부터 순서를 +1하여 정렬한다.
    5.트랜잭션이 끝나면 영속화된 내용이 커밋이 되어 저장된다.

<img src="https://github.com/gototheTK/Community/blob/master/writing_comment.gif?raw=true" width=700 heigh400/>
<img src="https://github.com/gototheTK/Community/blob/master/writing_comment_comment.gif?raw=true" width=700 heigh400/>

## 검색기능

    1.버튼을 누르거나 엔터를 누르면 쿼리되어진 링크가 바디로 이동한다.

<img src="https://github.com/gototheTK/Community/blob/master/searching.gif?raw=true" width=700 heigh400/>

## 게시글 삭제 및 수정 기능 추가

    1.로그인시 삭제 및 수정 버튼이 보이게 한다.
    ### 삭제
    2.삭제버튼을 누르면 게시글 번호를 DELETE방식으로 전송한다.
    3.해당하는 게시글번호로 게시글을 찾아 게시글을 삭제한다.
    ### 수정
    2. 수정버튼을 누르면 해당 게시글의 번호와 제목과 내용을 채운 글쓰기화면을 띄운다.
    3 등록버튼을 누르면 PUT으로 채워진 헤더와 내용으로 채워진 바디를 보낸다.
    4 받을 글의 번호로 해당하는 게시글을 찾고 수정된 내용과 글을 채운다.

## 댓글 삭제 및 수정 기능 추가

    1.로그인이 되어있다면 삭제 및 수정 버튼이 보이게한다.
    ### 삭제
    2.삭제버튼을 클릭하면 도메인은 댓글번호로 쿼리가된 도메인으로 DELETE리퀘스트를 한다.
    3.해당하는 댓글번호를 찾아 삭제하고 댓글 그룹을 다시 1부터 정렬한다.
    4.요청이 완료되면 댓글부분을 다시 렌더링한다.
    ### 수정
    2.수정버튼을 클릭하면 도메인은 댓글번호로 쿼리가된 도메인으로 PUT리퀘스트를 한다.
    3.해당하는 댓글번호를 찾아 수정하고 요청을 완료한다.
    4.요청이 완료되면 댓글부분을 다시 렌더링한다.

## 삭제버튼이 있는 작성한 게시글들을 가져오기

## 삭제버튼이 있는 작성한 댓글들을 가져오기

## 관심사 검색기능 추가하기

<img src="https://github.com/gototheTK/Community/blob/master/interesting_writing.gif?raw=true" width=700 heigh400/>

## 사진 한개만가져오기

<img src="https://github.com/gototheTK/Community/blob/master/sign_in.gif?raw=true" width=700 heigh400/>

## 게시글 스크롤 페이징으로 바꿔보기

## 관심사 스크롤 페이징 구현해보기

<img src="https://github.com/gototheTK/Community/blob/master/interesting_selecting.gif?raw=true" width=700 heigh400/>
