import "./App.css";
import GlobalStyles from "./styles/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import SignUp from "./components/SignUp/SignUpForm";
import LoginForm from "./components/Login/LoginForm/LoginForm";
import PasswordReset from "./components/Login/PasswordReset/PasswordReset";
import UserProfile from "./pages/Profile/UserProfile";
import DirectMessage from "./pages/DM/DirectMessage";
import SettingMain from "./pages/SettingForm/SettingMain";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<PasswordReset />} />
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/dm" element={<DirectMessage />}></Route>
        <Route path="/accounts" element={<SettingMain />}></Route>
      </Routes>
    </>
  );
}

export default App;
