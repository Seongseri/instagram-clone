import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import moment from "moment";
import * as S from "./MessageWindow.Styles";

const socket = io.connect("/");

const MessageWindow = () => {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const displayContainer = useRef(null);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chatting", {
      name: nickname,
      msg: message,
      time: moment(new Date()).format("h:mm A"),
    });
    setMessage("");
  };

  useEffect(() => {
    socket.on("chatting", (payload) => {
      setChat((prev) => [...prev, payload]);
      if (displayContainer.current) {
        displayContainer.current.scrollTo(
          0,
          displayContainer.current.scrollHeight
        );
      }
    });
  }, []);

  return (
    <S.Wrapper>
      <S.UserContainer>
        <label htmlFor="nickname">대화명</label>
        <input
          type="text"
          id="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </S.UserContainer>
      <S.DisplayContainer ref={displayContainer}>
        <ul className="chatting-list">
          {chat.map(({ name, msg, time }, index) => (
            <S.ChatItem key={index} isSent={nickname === name}>
              <S.Profile>
                <span className="user">{name}</span>
                <img
                  src="https://placeimg.com/50/50/any"
                  alt="any"
                  className="image"
                />
              </S.Profile>
              <span className="message">{msg}</span>
              <span className="time">{time}</span>
            </S.ChatItem>
          ))}
        </ul>
      </S.DisplayContainer>
      <S.InputContainer>
        <input
          type="text"
          className="chatting-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendChat(e)}
        />
        <S.SendButton onClick={sendChat}>전송</S.SendButton>
      </S.InputContainer>
    </S.Wrapper>
  );
};

export default MessageWindow;
