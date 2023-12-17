import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to={"/"}>ホーム</Link></li>
            <li><Link to={"/createpost"}>投稿ページ</Link></li>
            <li><Link to={"/login"}>ログイン</Link></li>
        </ul>
    </nav>
  )
};

export default Navbar;