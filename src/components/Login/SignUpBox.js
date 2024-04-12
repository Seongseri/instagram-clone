import React from "react";
import styled from "styled-components";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import Input from "../Global/Input";

const SignUp = ({
  onChangeInput,
  handleGoogleSignup,
  handleSignUp,
  email,
  username,
  displayName,
  password,
  error,
}) => {
  const { message } = error || {};

  return (
    <StWrapper>
      <StLogin>
        <StQuestionBox>
          <StText>계정이 있으신가요?</StText>
          <Link to="/login">
            <StSignUpButton>로그인</StSignUpButton>
          </Link>
        </StQuestionBox>
      </StLogin>
      <StSignUpBox>
        <StLogo
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="instagram"
        />
        <StNotice>친구들의 사진과 동영상을 보려면 가입하세요.</StNotice>
        <StFacebookLogin onClick={handleGoogleSignup}>
          <StFacebookIcon />
          <span>Facebook으로 로그인</span>
        </StFacebookLogin>
        <StContour>
          <StLine></StLine>
          <StOr>또는</StOr>
          <StLine></StLine>
        </StContour>
        <StSignUpForm onSubmit={handleSignUp}>
          <Input
            name="email"
            type="text"
            placeholder="이메일"
            value={email}
            onChange={onChangeInput}
            required
          />
          <Input
            name="username"
            type="text"
            placeholder="성명"
            value={username}
            onChange={onChangeInput}
          />
          <Input
            name="displayName"
            type="text"
            placeholder="사용자 이름"
            value={displayName}
            onChange={onChangeInput}
          />
          <Input
            name="password"
            type="password"
            placeholder="비밀번호 6자리 이상"
            value={password}
            onChange={onChangeInput}
            required
          />
          {message && <StErrorBox>{message}</StErrorBox>}
          <StButton type="submit" valid={password?.length}>
            회원 가입 및 로그인
          </StButton>
        </StSignUpForm>
        <StNotice2>
          가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.
        </StNotice2>
      </StSignUpBox>
    </StWrapper>
  );
};

const StSignUpBox = styled.div`
  padding: 3rem 0rem;
  background: ${({ theme }) => theme.white};
  width: 35rem;
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.gray};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-center;
`;

const StLogo = styled.img`
  width: 17rem;
  margin: 0 autos;
`;

const StNotice = styled.div`
  margin-top: 1.5rem;
  width: 27rem;
  color: ${({ theme }) => theme.darkGray};
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
`;

const StFacebookLogin = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.activeBlue};
  border-radius: 3px;
  margin-top: 1.5rem;
  width: 27rem;
  height: 3rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
`;

const StFacebookIcon = styled(Facebook)`
  margin-right: 0.5rem;
  width: 1.8rem;
  color: white;
`;

const StContour = styled.div`
  width: 27rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

const StLine = styled.div`
  border-top: 1px solid ${({ theme }) => theme.gray};
  flex-grow: 1;
`;

const StOr = styled.div`
  width: 5rem;
  margin: 2rem 0rem;
  color: ${({ theme }) => theme.darkGray};
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
`;

const StSignUpForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StErrorBox = styled.div`
  width: 27rem;
  height: auto;
  margin-top: 1.5rem;
  color: red;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.3;
  word-break: keep-all;
`;

const StButton = styled.button`
  background: ${({ valid, theme }) =>
    valid >= 6 ? theme.activeBlue : theme.inactiveBlue};
  width: 27rem;
  height: 3rem;
  border-radius: 3px;
  margin-top: 1.5rem;
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: ${({ valid }) => (valid >= 6 ? "pointer" : "default")};
`;

const StNotice2 = styled.div`
  margin-top: 1.5rem;
  width: 27rem;
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.darkGray};
`;

export default SignUpBox;
