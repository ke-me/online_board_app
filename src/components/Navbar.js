import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
        <ul>
            <li><Link to={"/"}>ホーム</Link></li>
            {isAuth ? (
            <>
            <li><Link to={"/createpost"}>投稿ページ</Link></li>
            <li><Link to={"/logout"}>ログアウト</Link></li>
            </>
            ) : (
            <li><Link to={"/login"}>ログイン</Link></li>
            )}
        </ul>
    </nav>
  )
};

export default Navbar;