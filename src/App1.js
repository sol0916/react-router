import {Route, Routes} from "react-router-dom";
import Home from "./conponent/Home.js";
import Info from "./conponent/Info.js";
import User from "./conponent/User.js";
import Board from "./conponent/Board.js";
import BoardContent from "./conponent/BoardContent.js";
import Header from "./layout/Header.js";
import MyPage from "./conponent/MyPage.js";

function App() {
  return (
    
    <Routes>
      <Route element={<Header/>}>
        <Route path="/" element={<Home/>}/>
        {/* 쿼리스트링 */}
        <Route path="/user" element={<User/>}/>
        {/* 쿼리파라미터 - 추가설정 */}
        <Route path="/info/:a/:b" element={<Info/>}/>
      </Route>

      {/* board, boardContent분기 */}
     {/*  <Route path="/board" element={<Board/>}/>
      <Route path="/board/:num" element={<BoardContent/>}/> */}

      {/* board의 자식 boardContent 중첩라우터 */}
      {/* Outlet 컴포넌트 추가 */}
      <Route path="/board" element={<Board/>}>
        <Route path=":num" element={<BoardContent/>}/>
      </Route>

      <Route path="mypage" element={<MyPage/>} />



    </Routes>


  );
}

export default App;
