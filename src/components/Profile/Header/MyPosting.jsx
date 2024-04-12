import { useEffect, useState } from "react";
import * as S from "./MyPosting.Styles";
import Posting from "./Posting";
import { ReactComponent as Table } from "../../../assets/Svgs/Table.svg";
import { ReactComponent as Bookmark } from "../../../assets/Svgs/Bookmark.svg";
import { ReactComponent as Tagged } from "../../../assets/Svgs/Tagged.svg";

const MyPosting = () => {
  const [postings, setPostings] = useState([]);
  const [selectedTab, setSelectedTab] = useState("게시물");

  useEffect(() => {
    fetch("/data/posting.json")
      .then((res) => res.json())
      .then((data) => {
        setPostings(data.postingData);
      });
  }, []);

  const getTabStyle = (tabName) => ({
    borderTop: selectedTab === tabName ? "1px solid rgb(64,64,64)" : "none",
  });

  return (
    <>
      <S.MyPostingWrapperDiv>
        <S.MyPostingSelectOptionDiv>
          <S.AllPostingTabButton
            onClick={() => setSelectedTab("게시물")}
            style={getTabStyle("게시물")}
          >
            <Table width="18px" height="18px" />
            <S.SelectedTabDiv>게시물</S.SelectedTabDiv>
          </S.AllPostingTabButton>
          <S.SavedTabButton
            onClick={() => setSelectedTab("저장됨")}
            style={getTabStyle("저장됨")}
          >
            <Bookmark width="18px" height="18px" />
            <S.SelectedTabDiv>저장됨</S.SelectedTabDiv>
          </S.SavedTabButton>
          <S.TaggedTabButton
            onClick={() => setSelectedTab("태그됨")}
            style={getTabStyle("태그됨")}
          >
            <Tagged width="18px" height="18px" />
            <S.SelectedTabDiv>태그됨</S.SelectedTabDiv>
          </S.TaggedTabButton>
        </S.MyPostingSelectOptionDiv>
        <S.MyPosingGrid>
          {postings.map((posting) => {
            return <Posting key={posting.postingId} postingData={posting} />;
          })}
        </S.MyPosingGrid>
      </S.MyPostingWrapperDiv>
    </>
  );
};

export default MyPosting;
