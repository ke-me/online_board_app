import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Createpost from './components/Createpost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    {/* react routerをインストールし、ルーティングの設定を行う */}
    <BrowserRouter>
    {/* 全ページにNavbarコンポーネントを読み込む */}
    <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        {/* 例：/createpostページにアクセスしたら、Createpostコンポーネントを表示 */}
        <Route path='/createpost' element={ <Createpost />}/>
        <Route path='/login' element={ <Login />}/>
        <Route path='/logout' element={ <Logout />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
