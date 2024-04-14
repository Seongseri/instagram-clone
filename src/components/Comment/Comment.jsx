import { useState } from "react";
import * as S from "./Comment.Styles";

const Comment = ({
  comment: { id, username, content },
  isEditing,
  setSelectedCommentIndex,
  editComment,
  deleteComment,
}) => {
  const [editValue, setEditValue] = useState(content);

  const handleEditInput = () => {
    editComment(id, editValue);
    setSelectedCommentIndex(0);
  };

  const handleDeleteBtn = (e) => {
    deleteComment(id);
  };

  const editInput = (
    <input
      type="text"
      value={editValue}
      onChange={(e) => setEditValue(e.target.value)}
      onKeyDown={(e) => (e.key === "Enter" ? handleEditInput() : null)}
    />
  );

  return (
    <S.CommentLi id={id}>
      <S.WrapSpan className="wrap-cmt">
        <span className="cmt-user">{username}</span>
        {isEditing ? editInput : <span className="cmt-cont">{content}</span>}
      </S.WrapSpan>
      <S.WrapBtnSpan className="wrap-btn">
        <S.EditButton
          className="btn-edit"
          onClick={() =>
            isEditing ? handleEditInput() : setSelectedCommentIndex(id)
          }
        >
          <i className="fa-xmark" />
        </S.EditButton>
        <S.DeleteButton className="btn-remove" onClick={handleDeleteBtn}>
          <i className="fa-xmark" />
        </S.DeleteButton>
      </S.WrapBtnSpan>
    </S.CommentLi>
  );
};

export default Comment;
