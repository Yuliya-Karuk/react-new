import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Description 1' },
    { id: 2, title: 'Javascript 2', body: 'Description 2' },
    { id: 3, title: 'Javascript 3', body: 'Description 3' },
  ])

  const [title, setTitle] = useState('')

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);
  }

  const bodyInputRef = useRef();

  return (
    <>
    <div className="App">
      <Counter/>
      <ClassCounter/>
      <form>
        {/* Управляемый компонет*/}
        <MyInput
          type="text"
          placeholder="Post Title"
          value={title}
          onChange= {e => setTitle(e.target.value)}
        />
        {/* Неуправляемый компонет*/}
        <MyInput
          type="text"
          placeholder="Post Description"
          ref = {bodyInputRef}
        />
        <MyButton onClick={addNewPost}>Create new post</MyButton>
      </form>
      <PostList posts={posts} title="Post`s list 1"/>
    </div>
    </>
  );
}

export default App;
