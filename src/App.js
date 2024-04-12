import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./pages/Profile/UserProfile";
import DirectMessage from "./pages/DM/DirectMessage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<UserProfile />}></Route>
          <Route path="/dm" element={<DirectMessage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
