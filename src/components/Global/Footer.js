import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StWrapper>
      <StFooter>
        <StCategories>
          <li>
            <a href="https://about.meta.com/">Meta</a>
          </li>
          <li>
            <a href="https://about.instagram.com/">소개</a>
          </li>
          <li>
            <a href="https://about.instagram.com/blog/">블로그</a>
          </li>
          <li>
            <a href="https://www.instagram.com/about/jobs/?hl=ko">채용 정보</a>
          </li>
          <li>
            <a href="https://help.instagram.com/">도움말</a>
          </li>
          <li>
            <a href="https://developers.facebook.com/docs/instagram">API</a>
          </li>
          <li>
            <a href="https://www.instagram.com/legal/privacy/?hl=ko">
              개인정보처리방침
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/legal/terms/?hl=ko">약관</a>
          </li>
          <li>
            <a href="https://www.instagram.com/explore/locations/?hl=ko">
              위치
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/web/lite/?hl=ko">
              Instagram Lite
            </a>
          </li>
          <li>
            <a href="https://www.threads.net/">Threads</a>
          </li>
          <li>
            <a href="https://www.facebook.com/help/instagram/261704639352628?hl=ko">
              연락처 업로드 & 비사용자
            </a>
          </li>
          <li>
            <a href="https://about.meta.com/technologies/meta-verified/">
              Meta Verified
            </a>
          </li>
        </StCategories>
        <StCopyrightBox>
          <StSelectBox>
            <option value="af">Afrikaans</option>
            <option value="ar">العربية</option>
            <option value="cs">Čeština</option>
            <option value="da">Dansk</option>
            <option value="de">Deutsch</option>
            <option value="el">Ελληνικά</option>
            <option value="en">English</option>
            <option value="en-gb">English (UK)</option>
            <option value="es">Español (España)</option>
            <option value="es-la">Español</option>
            <option value="fa">فارسی</option>
            <option value="fi">Suomi</option>
            <option value="fr">Français</option>
            <option value="he">עברית</option>
            <option value="id">Bahasa Indonesia</option>
            <option value="it">Italiano</option>
            <option value="ja">日本語</option>
            <option value="ko">한국어</option>
            <option value="ms">Bahasa Melayu</option>
            <option value="nb">Norsk</option>
            <option value="nl">Nederlands</option>
            <option value="pl">Polski</option>
            <option value="pt-br">Português (Brasil)</option>
            <option value="pt">Português (Portugal)</option>
            <option value="ru">Русский</option>
            <option value="sv">Svenska</option>
            <option value="th">ภาษาไทย</option>
            <option value="tl">Filipino</option>
            <option value="tr">Türkçe</option>
            <option value="zh-cn">中文(简体)</option>
            <option value="zh-tw">中文(台灣)</option>
            <option value="bn">বাংলা</option>
            <option value="gu">ગુજરાતી</option>
            <option value="hi">हिन्दी</option>
            <option value="hr">Hrvatski</option>
            <option value="hu">Magyar</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="ml">മലയാളം</option>
            <option value="mr">मराठी</option>
            <option value="ne">नेपाली</option>
            <option value="pa">ਪੰਜਾਬੀ</option>
            <option value="si">සිංහල</option>
            <option value="sk">Slovenčina</option>
            <option value="ta">தமிழ்</option>
            <option value="te">తెలుగు</option>
            <option value="ur">اردو</option>
            <option value="vi">Tiếng Việt</option>
            <option value="zh-hk">中文(香港)</option>
            <option value="bg">Български</option>
            <option value="fr-ca">Français (Canada)</option>
            <option value="ro">Română</option>
            <option value="sr">Српски</option>
            <option value="uk">Українська</option>
          </StSelectBox>
          <span>&copy; 2024 Instagram from Meta</span>
        </StCopyrightBox>
      </StFooter>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  width: 100vw;
  height: 12rem;
`;

const StFooter = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 95rem;
  height: 100%;
  padding-top: 1.5rem;
  color: ${({ theme }) => theme.category};
  font-size: 1.2rem;
`;

const StCategories = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  & > li + li {
    margin-left: 1.5rem;
  }
`;

const StCopyrightBox = styled.div`
  margin-top: 1.8rem;
`;

const StSelectBox = styled.select`
  border: none;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.category};
  font-size: 1.2rem;
  margin-right: 1rem;
  outline: none;
  cursor: pointer;
`;

export default Footer;
