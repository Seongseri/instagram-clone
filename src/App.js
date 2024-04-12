import "./App.css";
import GlobalStyles from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main/Main";
import UserProfile from "./pages/Profile/UserProfile";
import DirectMessage from "./pages/DM/DirectMessage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
          <Route path="/dm" element={<DirectMessage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
