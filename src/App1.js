import {Route, Routes} from "react-router-dom";
import Home from "./component/Home.js";
import Info from "./component/Info.js";
import User from "./component/User.js";
import Board from "./component/Board.js";
import BoardContent from "./component/BoardContent.js";
import Header from "./layout/Header.js";
import MyPage from "./component/MyPage.js";

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
