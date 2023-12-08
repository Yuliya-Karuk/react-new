import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Description 1' },
    { id: 2, title: 'Javascript 2', body: 'Description 2' },
    { id: 3, title: 'Javascript 3', body: 'Description 3' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <>
    <div className="App">
      <Counter/>
      <ClassCounter/>
      <PostForm create={createPost}/>
      {posts.length !== 0
        ?<PostList remove={removePost} posts={posts} title="Post`s list 1"/>
        :<h1 style={{textAlign: 'center'}}>Posts are not found</h1>
      }
    </div>
    </>
  );
}

export default App;
