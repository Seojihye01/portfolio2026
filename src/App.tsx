import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header가 BrowserRouter 안에 있으므로 useLocation() 사용 가능 */}
      <Header />

      <Routes>
        {/* 메인 페이지 컴포넌트를 여기에 연결하세요 */}
        <Route path="/" element={<div>Main Page Content</div>} />
        <Route path="/sub" element={<div>sub Page Content</div>} />
        {/* <Route path="/curation" element={<div>Curation Page Content</div>} />
        <Route path="/explore" element={<div>Explore Page Content</div>} />
        <Route path="/funding" element={<div>Funding Page Content</div>} /> */}
      </Routes>
    </>
  );
}

export default App;
