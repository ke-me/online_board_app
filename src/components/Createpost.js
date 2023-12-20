import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Createpost.css";
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Createpost = ({ isAuth }) => {
  const navigate = useNavigate();

  const [postText, setPostText] = useState();

  // ログインしてない場合は、ログインページにリダイレクトする
  useEffect(() => {
    // console.log(auth);
    if(!isAuth) {
      navigate("/login");
    }
  }, []);

  // 現在の日時を保管
  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);

  // 現在の日時を取得
  useEffect(() => {
    setInterval(() => {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();

      setDate(year + '/' + month + '/' + day );

      let hour = d.getHours().toString().padStart(2, '0');
      let minute = d.getMinutes().toString().padStart(2, '0');
      let second = d.getSeconds().toString().padStart(2, '0');
        setTime(hour + ':' + minute + ':' + second);
    });
  }, 10000);

  const handlePost = async () => {
     await addDoc(collection(db, "post"), {
      postText: postText,
      date: date,
      time: time,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      }
    });

    navigate("/");
  };

  return (
    <section className='postContent'>
      <h1>投稿ページ</h1>
      <div className='date'><span>{time}</span> {date}</div>
      <textarea  className='txt' onChange={(e) => setPostText(e.target.value)}></textarea>
      <button onClick={handlePost} className='postBtn'>投稿する</button>
    </section>
  )
};

export default Createpost;