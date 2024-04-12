import React, { useEffect } from "react";
import bg1 from "../../assets/screenshot1.png";
import bg2 from "../../assets/screenshot2.png";
import bg3 from "../../assets/screenshot3.png";
import bg4 from "../../assets/screenshot4.png";
import "../../styles/UI/ImageSlider.css";

const ImageSlider = () => {
  useEffect(() => {
    let slideIndex = 0;
    let timerId; // 타이머 ID 저장을 위한 변수 선언

    const slides = document.getElementsByClassName("mySlides");

    const showSlides = () => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      // slides 배열에 요소가 실제로 존재하는지 확인
      if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
      }
      timerId = setTimeout(showSlides, 2000); // 2초마다 showSlides 호출, timerId에 저장
    };

    showSlides();

    // 컴포넌트 언마운트 시 clearTimeout을 호출하여 타이머를 정리
    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="loginLeft">
      <div className="mySlides fade">
        <img src={bg1} alt="Slide 1" className="image" />
      </div>
      <div className="mySlides fade">
        <img src={bg2} alt="Slide 2" className="image" />
      </div>
      <div className="mySlides fade">
        <img src={bg3} alt="Slide 3" className="image" />
      </div>
      <div className="mySlides fade">
        <img src={bg4} alt="Slide 4" className="image" />
      </div>
    </div>
  );
};

export default ImageSlider;
