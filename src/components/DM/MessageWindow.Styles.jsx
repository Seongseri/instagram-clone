import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const UserContainer = styled.div`
  background: #a9bdce;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;

  label {
    font-size: 14px;
    margin-right: 1rem;
  }

  input {
    border-radius: 3px;
    border: none;
    height: 100%;
  }
`;

export const DisplayContainer = styled.div`
  flex: 12;
  background: #b2c7d9;
  overflow-y: scroll;
`;

export const InputContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: stretch;
  align-items: stretch;

  span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.3rem;
    width: 100%;
  }
`;

export const ChattingInput = styled.input`
  font-size: 12px;
  height: 100%;
  flex: 8;
  border: none;
`;

export const SendButton = styled.button`
  flex: 1;
  background: #ffeb33;
  border: none;
  height: 100%;
  border-radius: 3px;
`;

export const ChatItem = styled.li`
  width: 90%;
  padding: 0.3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 0.5rem;

  &.sent {
    flex-direction: row-reverse;
  }

  &.sent .message {
    background: #ffeb33;
  }

  &.received .message {
    background: #fff;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  .user {
    font-size: 10px;
    margin-bottom: 0.3rem;
  }

  .image {
    border-radius: 50%;
    object-fit: cover;
    width: 50px;
    height: 50px;
  }
`;

export const Message = styled.span`
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 12px;
  margin: 0 5px;
  flex: 7;
`;

export const Time = styled.span`
  font-size: 10px;
  margin: 0 5px;
`;
