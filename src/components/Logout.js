import React from 'react';
import "./Login.css";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      // ローカルストレージを削除する
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  
  return (
    <section className='loginContent'>
        <p>ログアウトする</p>
        <button onClick={handleLogout} className='loginBtn'>ログアウト</button>
    </section>
  )
};

export default Logout;