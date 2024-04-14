import React, { useState } from "react";
import Member from "../RightBar/Member";
import "./Feed.css";
import feedData from "./DataBase/feedData";
import commentData from "./DataBase/commentIdData";

function Feed() {
  const [data, setData] = useState(feedData);
  const [cmtData, setCmtData] = useState(commentData);

  const [isClicked, setIsClicked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [viewCmt, setViewCmt] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [addCmt, setAddCmt] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [heartImg, setHeartImg] = useState([
    "/assets/heart.png",
    "/assets/heart.png",
    "/assets/heart.png",
    "/assets/heart.png",
    "/assets/heart.png",
    "/assets/heart.png",
  ]);
  const [bookmarkImg, setBookmarkImg] = useState([
    "/assets/bookmark.png",
    "/assets/bookmark.png",
    "/assets/bookmark.png",
    "/assets/bookmark.png",
    "/assets/bookmark.png",
    "/assets/bookmark.png",
  ]);

  const [commentTxt, setCommentTxt] = useState("");
  const onChange = (e) => {
    setCommentTxt(e.target.value);
  };

  return (
    <div className="article">
      {data.map((a, i) => {
        const content = cmtData[i];
        return (
          <article className="feedBox">
            <div className="feed-header">
              <div>
                <Writer data={data[i]}></Writer>
              </div>
              <img
                className="feed-header-icon"
                src={process.env.PUBLIC_URL + "/assets/more.png"}
              />
            </div>
            <img
              className="feed-img"
              src={process.env.PUBLIC_URL + data[i].feedImg}
            />
            <div className="feed-icon">
              <div className="leftIcon">
                <img
                  className="eachIcon"
                  src={process.env.PUBLIC_URL + heartImg[i]}
                  onClick={() => {
                    if (isClicked[i]) {
                      let copyIsClicked = [...isClicked];
                      let copyHeartImg = [...heartImg];
                      copyIsClicked[i] = false;
                      copyHeartImg[i] = "/assets/heart.png";
                      setHeartImg(copyHeartImg);
                      setIsClicked(copyIsClicked);
                    } else {
                      let copyIsClicked = [...isClicked];
                      let copyHeartImg = [...heartImg];
                      copyIsClicked[i] = true;
                      copyHeartImg[i] = "/assets/filled-heart.png";
                      setHeartImg(copyHeartImg);
                      setIsClicked(copyIsClicked);
                    }
                  }}
                />
                <img
                  className="eachIcon"
                  src={process.env.PUBLIC_URL + "/assets/chat.png"}
                  onClick={() => {
                    if (addCmt[i]) {
                      let copyAddCmt = [...addCmt];
                      copyAddCmt[i] = false;
                      setAddCmt(copyAddCmt);
                    } else {
                      let copyAddCmt = [...addCmt];
                      copyAddCmt[i] = true;
                      setAddCmt(copyAddCmt);
                    }
                  }}
                />
                <img
                  className="eachIcon"
                  src={process.env.PUBLIC_URL + "/assets/send.png"}
                />
              </div>
              <img
                className="rightIcon"
                src={process.env.PUBLIC_URL + bookmarkImg[i]}
                onClick={() => {
                  if (isClicked[i]) {
                    let copyIsClicked = [...isClicked];
                    let copyBookmarkImg = [...bookmarkImg];
                    copyIsClicked[i] = false;
                    copyBookmarkImg[i] = "/assets/bookmark.png";
                    setBookmarkImg(copyBookmarkImg);
                    setIsClicked(copyIsClicked);
                  } else {
                    let copyIsClicked = [...isClicked];
                    let copyBookmarkImg = [...bookmarkImg];
                    copyIsClicked[i] = true;
                    copyBookmarkImg[i] = "/assets/filled-bookmark.png";
                    setBookmarkImg(copyBookmarkImg);
                    setIsClicked(copyIsClicked);
                  }
                }}
              />
            </div>
            <div className="feed-like">
              <span className="feed-txt-bold">{data[i].writerId}</span> 님{" "}
              <span className="feed-txt-bold">여러 명</span>이 좋아합니다
            </div>
            <div className="feed-text">
              <span className="feed-txt-bold">{data[i].writerId}</span>{" "}
              {data[i].feedTxt}
            </div>
            <div className="feed-comment">
              <div
                className="viewComment"
                onClick={() => {
                  if (viewCmt[i]) {
                    let copyViewCmt = [...viewCmt];
                    copyViewCmt[i] = false;
                    setViewCmt(copyViewCmt);
                  } else {
                    let copyViewCmt = [...viewCmt];
                    copyViewCmt[i] = true;
                    setViewCmt(copyViewCmt);
                  }
                }}
              >
                댓글 {data[i].cmtNum}개 보기
              </div>
              {viewCmt[i] == true ? (
                <Comment content={content} data={data[i]} />
              ) : null}
              <div
                className="addComment"
                onClick={() => {
                  if (addCmt[i]) {
                    let copyAddCmt = [...addCmt];
                    copyAddCmt[i] = false;
                    setAddCmt(copyAddCmt);
                  } else {
                    let copyAddCmt = [...addCmt];
                    copyAddCmt[i] = true;
                    setAddCmt(copyAddCmt);
                  }
                }}
              >
                댓글 달기...
              </div>
              {addCmt[i] == true ? (
                <div className="commentInput">
                  <input
                    className="inputBox"
                    placeholder="댓글을 입력하세요"
                    onChange={onChange}
                    value={commentTxt}
                  ></input>
                  {commentTxt.trim() != "" ? (
                    <button
                      className="commentBtn"
                      onClick={() => {
                        let copyData = [...cmtData];
                        let copyDataFirst = copyData[i];
                        copyDataFirst.push({
                          id: "loopy",
                          txt: commentTxt.valueOf(),
                        });
                        data[i].cmtNum++;
                        setCmtData(copyData);
                        setCommentTxt("");
                      }}
                    >
                      작성
                    </button>
                  ) : (
                    <button className="nonActiveBtn">작성</button>
                  )}
                </div>
              ) : null}
            </div>
            <hr className="feed-line"></hr>
          </article>
        );
      })}
    </div>
  );
}

function Writer(props) {
  return (
    <div className="eachMember">
      <div className="eachMember-info">
        <img className="user-img" src={props.data.writerImg} />
        <span>
          <p className="eachId">{props.data.writerId}</p>
          <p className="eachTxt">{props.data.writerTxt}</p>
        </span>
      </div>
    </div>
  );
}

function Comment(props) {
  const [cmtLike, setCmtLike] = useState("/assets/heart.png");
  return (
    <div className="comment-list">
      {props.content.map((a, i) => {
        return (
          <p className="eachComment">
            <div>
              <span className="comment-id">{props.content[i]["id"]}</span>
              {props.content[i]["txt"]}
            </div>
            <div className="comment-icon">
              <img
                className="comment-heartIcon"
                src={process.env.PUBLIC_URL + cmtLike}
                onClick={(e) => {
                  if (
                    e.target.getAttribute("src") ==
                    process.env.PUBLIC_URL + cmtLike
                  ) {
                    e.target.setAttribute(
                      "src",
                      process.env.PUBLIC_URL + "/assets/filled-heart.png"
                    );
                  } else if (
                    e.target.getAttribute("src") ==
                    process.env.PUBLIC_URL + "/assets/filled-heart.png"
                  ) {
                    e.target.setAttribute("src", cmtLike);
                  }
                }}
              />
              <img
                className="comment-deleteIcon"
                src={process.env.PUBLIC_URL + "/assets/delete.png"}
                onClick={(e) => {
                  if (e.target.className === "comment-deleteIcon") {
                    let parent = e.target.parentElement.parentElement;
                    parent.remove();
                    props.data.cmtNum--;
                  }
                }}
              />
            </div>
          </p>
        );
      })}
    </div>
  );
}

export default Feed;

{
  /* <p className="eachComment">
        <div>
          <span className="comment-id">{props.data.id2}</span>
          {props.data.cmt2}
        </div>
        <img
          className="comment-icon"
          src={process.env.PUBLIC_URL + "/assets/heart.png"}
        />
      </p>
      <p className="eachComment">
        <div>
          <span className="comment-id">{props.data.id3}</span>
          {props.data.cmt3}
        </div>
        <img
          className="comment-icon"
          src={process.env.PUBLIC_URL + "/assets/heart.png"}
        />
      </p> */
}
