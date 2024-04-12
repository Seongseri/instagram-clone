import React from "react";
import "../../../styles/UI/Sidebar.css";
import InstagramLogo from "../../../assets/Images/sidebar/instagram_logo.png";
import HomeIcon from "../../../assets/Images/sidebar/home.png";
import SearchIcon from "../../../assets/Images/sidebar/search.png";
import ExploreIcon from "../../../assets/Images/sidebar/search_tab.png";
import SlideshowIcon from "../../../assets/Images/sidebar/reels.png";
import ChatIcon from "../../../assets/Images/sidebar/direct.png";
import FavoriteBorderIcon from "../../../assets/Images/sidebar/notify.png";
import AddCircleOutlineIcon from "../../../assets/Images/sidebar/make_post.png";
import MenuIcon from "../../../assets/Images/sidebar/bar_menu.png";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <img className="sidenav__logo" src={InstagramLogo} alt="Instagram Logo" />

      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>홈</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon />
          <span>검색</span>
        </button>
        <button className="sidenav__button">
          <ExploreIcon />
          <span>탐색 턉</span>
        </button>
        <button className="sidenav__button">
          <SlideshowIcon />
          <span>릴스</span>
        </button>
        <button className="sidenav__button">
          <ChatIcon />
          <span>메시지</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span>알림</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>만들기</span>
        </button>
        <button className="sidenav__button">
          <span>프로필</span>
        </button>
        <button className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText">더 보기</span>
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
