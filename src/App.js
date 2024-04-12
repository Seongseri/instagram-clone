import "./App.css";
import GlobalStyles from "./styles/GlobalStyle";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main/Main";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </>
  );
}

export default App;
