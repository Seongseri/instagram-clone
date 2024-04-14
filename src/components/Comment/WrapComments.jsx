import { useEffect, useState } from "react";
import CommentLists from "./CommentLists";
import Comment from "./Comment";
import * as S from "./WrapComments.Styles";

const WrapComments = ({ comments }) => {
  const [input, setInput] = useState("");
  const [commentLists, setCommentLists] = useState([]);

  useEffect(() => {
    fetch("/data/comment.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCommentLists(data.commentData);
      })
      .catch((error) => {
        console.error("데이터를 불러오는데 실패했습니다.", error);
      });
  }, []);

  const addComment = () => {
    if (input !== "") {
      const lastCmtIndex = commentLists.length - 1;
      const addedCmtId =
        lastCmtIndex >= 0 ? commentLists[lastCmtIndex].id + 1 : 1;
      const newComment = {
        id: addedCmtId,
        username: "SuperCoder",
        content: input,
      };
      setCommentLists([...commentLists, newComment]);
      setInput("");
    }
  };

  const editComment = (commentId, editValue) => {
    let newCommentLists = commentLists.map((item) => {
      if (item.id === commentId) {
        item.content = editValue;
      }
      return item;
    });
    setCommentLists(newCommentLists);
  };

  const deleteComment = (commentId) => {
    let newCommentLists = commentLists.filter((item) => item.id !== commentId);
    setCommentLists(newCommentLists);
  };

  return (
    <>
      <S.UlBox className="list-cmt">
        {commentLists.map((comment) => {
          const commentId = comment.id;
          return <Comment key={commentId} comment={comment} />;
        })}
      </S.UlBox>

      <S.InputDiv className="box-inp-cmt">
        <input
          type="text"
          placeholder="댓글 달기..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? addComment() : null)}
        />
        <button className="btn-submit" disabled="" onClick={addComment}>
          게시
        </button>
      </S.InputDiv>

      <S.CommentDiv className="wrap-comment">
        <CommentLists
          commentLists={commentLists}
          editComment={editComment}
          deleteComment={deleteComment}
        />
      </S.CommentDiv>
    </>
  );
};

export default WrapComments;
