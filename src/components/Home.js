import React, { useEffect, useState } from 'react';
import "./Home.css";
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect (() => {
    // すべてのドキュメントを取得
    const getPost = async () => {
      const data = await getDocs(collection(db, "post"));

      // // データを取得
      // console.log(data.docs);
      // // データを一つずつ取り出し、展開
      // console.log(data.docs.map((doc) => ({...doc.data()})));
      // // idが無いとエラーが出るので、docに入っているidを追加
      // console.log(data.docs.map((doc) => ({...doc.data(), id:doc.id})));

      // データを一つずつ取り出してpostListにセットする
      setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
    }
    getPost();
  }, []);

  const postDelete = async (id) => {
    await deleteDoc(doc(db, "post", id));
    window.location.href = "/";
  };

  return (
    <>
    {postList.map((post) => {
      return (
        <section className='postItem' key={post.id}>
          <span className='user'>@{post.author.username}</span>
          <p className='postText'>{post.postText}</p>
          <div className='postItemFoot'>
            <div className='postTime'>３時間前</div>
            {post.author.id === auth.currentUser?.uid && (
            <button className='deleteBtn' onClick={() => {postDelete(post.id)}}>削除</button>
            )}
          </div>
        </section>
      );
    })}
    </>
  )
};

export default Home;