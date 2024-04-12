import React, { useEffect, useState } from "react";
import "../../../styles/UI/login.css";
import InstagramLogo from "../../../assets/Images/login/logo_text.png";

const SignUp = () => {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let imageArray = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
  let imageIndex = 0;

  function changeImage() {
    img1.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
      imageIndex = 0;
    }
  }

  setInterval(changeImage, 1000);

  const [show1, setshow1] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      if (show1 < 4) {
        setshow1(show1 + 1);
      } else {
        setshow1(1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [show1]);

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    console.log("로그인 시도:", user, password);
    // 여기에 로그인 로직을 구현할 수 있습니다.
  };

  return (
    <div id="wrapper">
      <div className="container">
        <div className="form-data">
          <section>
            <div className="logo">
              <img src={InstagramLogo} />
            </div>
            <button>
              <a href="#" className="facebook-login">
                <i className="fab fa-facebook" /> Facebook으로 로그인
              </a>
            </button>
            <span className="has-separator">또는</span>
            <input
              type="text"
              placeholder="휴대폰 번호 또는 이메일 주소"
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="성명"
            />
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="사용자 이름"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />

            <div className="password-reset" href="#">
              저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
              업로드했을 수도 있습니다.
              <a href="#">더 알아보기</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
