import React, { useMemo, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript ', body: 'Description 1' },
    { id: 2, title: 'Python', body: 'Description 2' },
    { id: 3, title: 'Java', body: 'Description 3' },
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const sortedPosts = useMemo(() => {
    console.log('отработала функция сортед постс')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  return (
    <>
    <div className="App">
      <Counter/>
      <ClassCounter/>
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post`s list 1"/>
    </div>
    </>
  );
}

export default App;
