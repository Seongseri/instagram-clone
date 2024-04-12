import "./App.css";
import GlobalStyles from "./styles/GlobalStyle";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main/Main";
import SignUp from "./components/Login/SignUp";
import LoginForm from "./components/Login/LoginForm";
import ForgotPassword from "./components/Login/ForgotPassword";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
