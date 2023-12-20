import React from 'react';
import "./Login.css";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {

    const navigate = useNavigate();

    // ログインボタンをクリックした時の処理
    const handleLoginGoogle = () => {
        // ポップアップウィンドウでログインを行う
        signInWithPopup(auth, provider)
        .then((result) => {
            // console.log("ログイン済み");
            // ローカルストレージに値をセットする
            localStorage.setItem("isAuth", true);
            // ログイン後ホームにリダイレクト
            setIsAuth(true);
            navigate("/");
        });

    };

  return (
    <section className='loginContent'>
        <p>Googleアカウントでログインする</p>
        <button onClick={handleLoginGoogle} className='loginBtn'>ログイン</button>
    </section>
  )
};

export default Login;