import Posts from "../pages/Posts"
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";

export const routes = [
  {path: '/about', component: <About />, exact: true},
  {path: '/posts', component: <Posts />, exact: true},
  {path: '/posts/:id', component: <PostIdPage />, exact: true},
]