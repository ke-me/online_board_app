import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Createpost from './components/Createpost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';

function App() {
  // ローカルストレージの値を取得する
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));  

  return (
    <>
      {/* react routerをインストールし、ルーティングの設定を行う */}
      <BrowserRouter>
        {/* 全ページにNavbarコンポーネントを読み込む */}
        <Navbar isAuth={isAuth}/>
        <Routes>
          <Route path='/' element={ <Home />}/>
          {/* 例：/createpostページにアクセスしたら、Createpostコンポーネントを表示 */}
          <Route path='/createpost' element={ <Createpost isAuth={isAuth}/>}/>
          <Route path='/login' element={ <Login setIsAuth={setIsAuth}/>}/>
          <Route path='/logout' element={ <Logout setIsAuth={setIsAuth}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
