import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import '../styles/Pages.css';


const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostId, isLoading, error] = useFetching( async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  })

  const [fetchComments, isCommentsLoading, commentsError] = useFetching( async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  })

  useEffect(() => {
    fetchPostId(params.id);
    fetchComments(params.id);
  }, [])

  return (
    <div className='post-page'>
      <h1>Post page № {params.id}</h1>
      {isLoading
        ? <Loader />
        : <h3>{post.id}. {post.title}</h3>
      }
      <h1 style={{marginTop: 50}}>Comments</h1>
      {isCommentsLoading
        ? <Loader />
        : <div>
          {comments.map(comm =>
            <div style={{marginTop: 15}}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default PostIdPage;